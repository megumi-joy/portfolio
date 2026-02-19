# Supabase Setup Guide

Follow these steps to connect your Supabase backend to your portfolio.

## 1. Create a Supabase Project
1. Go to [supabase.com](https://supabase.com/) and create a new project.
2. Once the project is created, go to **Project Settings > API** and copy your `URL` and `anon public` key.

## 2. Configure Environment Variables
Create a `.env` file in the root of your project and add the following:
```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_public_key
```

## 3. Database Schema
Go to the **SQL Editor** in Supabase and run the following script to create the `orders` table:

```sql
create table orders (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  details text not null,
  status text default 'pending' check (status in ('pending', 'paid', 'sent')),
  invoice_url text,
  private_build_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ENABLE RLS
alter table orders enable row level security;

-- POLICIES
create policy "Users can view their own orders" 
on orders for select using (auth.uid() = user_id);

create policy "Users can insert their own orders" 
on orders for insert with check (auth.uid() = user_id);

-- ADMIN POLICY (Replace with your admin email or role)
create policy "Admins can view all orders"
on orders for select using (
  auth.email() = 'megumi.joy@gmail.com'
);

create policy "Admins can update orders"
on orders for update using (
  auth.email() = 'megumi.joy@gmail.com'
);

create table bookings (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users not null,
  start_time timestamp with time zone not null,
  end_time timestamp with time zone not null,
  status text default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  google_event_id text,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table bookings enable row level security;

create policy "Users can view their own bookings"
on bookings for select using (auth.uid() = user_id);

create policy "Users can insert their own bookings"
on bookings for insert with check (auth.uid() = user_id);

create policy "Admins can view all bookings"
on bookings for select using (auth.email() = 'megumi.joy@gmail.com');

create policy "Admins can update bookings"
on bookings for update using (auth.email() = 'megumi.joy@gmail.com');
```

## 4. Storage Setup
1. Go to **Storage** and create a new bucket named `private-builds`.
2. Set the bucket to **Public** (or configure restricted policies if you prefer signed URLs).
3. If public, anyone with the link can download the build after you upload it in the admin panel.

## 5. Authentication
1. Go to **Authentication > Providers**.
2. Ensure **Email** is enabled.
3. (Optional) Disable "Confirm Email" if you want users to be able to log in immediately without checking their inbox.

---
**Note**: The portfolio will still work in "Portfolio Mode" even if Supabase is not connected, but the Shop and Admin features will require these steps.
