export const signupOrLogin = (email, success, error) => {
  $.ajax({
    method: "POST",
    url: 'api/users',
    data: { user: { email } },
    success,
    error
  })
}

// TODO: Implement logout later when full app is there
// export const logout = (success, error) => {
// }

// TODO: Same as above
// export const login = (user, success, error) => {
//   $.ajax({
//     method: 'POST',
//     url: "api/users",
//     data: {user},
//     success,
//     error
//   })
// }
