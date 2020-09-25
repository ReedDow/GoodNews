insert into peritiuser (
    username,
    email,
    password
    
) values (
    ${username},
    ${password}
)
returning user_id, username;