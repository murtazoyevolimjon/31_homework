
-- create table foydalanuvchilar (
--     id uuid primary key default gen_random_uuid(),
--     ism varchar(100) not null,
--     familiya varchar(100) not null,
--     email varchar(150) unique not null,
--     parol varchar(255) not null,
--     telefon varchar(20),
--     manzil varchar(255)
-- );


-- create table postlar (
--     id uuid primary key default gen_random_uuid(),
--     sarlavha varchar(255) not null,
--     matn text not null,
--     slug varchar(255) unique not null, 
--     foydalanuvchi_id uuid not null references foydalanuvchilar(id) on delete cascade
-- );


-- create table kommentlar (
--     id uuid primary key default gen_random_uuid(),
--     matn text not null,
--     post_id uuid not null references postlar(id) on delete cascade,
--     foydalanuvchi_id uuid not null references foydalanuvchilar(id) on delete cascade,
--     yaratilgan_vaqt timestamp default current_timestamp
-- );

