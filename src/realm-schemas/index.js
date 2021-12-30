export const UserPosts = {
  name: 'all_posts',
  properties: {
    userId: {type: 'int', default: 0},
    id: {type: 'int', default: 0},
    body: 'string',
    title: 'string',
  },
};

export const UserDetails = {
  name: 'user_details',
  properties: {
    user_id: {type: 'int', default: 0},
    user_name: 'string',
    user_contact: 'string',
    user_address: 'string',
  },
};
