select a.ability_id, a.ability_content from ability a
join peritiuser u on a.user_id = u.user_id
where u.user_id = $1;