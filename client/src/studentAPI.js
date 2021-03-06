const baseUrl = 'http://localhost:3002/student';

export function getStudents() {
  return fetchStudents(baseUrl);
}

export function getStudent(id) {
  return fetchStudents(`${baseUrl}/${id}`, {
    method: 'GET',
  });
}
// export function getStudent(name) {
//   return fetchStudents(`${baseUrl}/${name}`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ name: name }),
//   });
// }

export function importStudents(newSs) {
  return fetchStudents(`${baseUrl}/multiple`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newSs),
  });
}

/* StudentID, 'completed', Test results
TestID, 'pending', Students Pending */
export function updateStudentTests(id, status, updatedData) {
  return fetchStudents(`${baseUrl}/${status}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });
}

function fetchStudents(url, options) {
  return fetch(url, options)
    .then((res) => {
      if (res.status < 400) return res;
      else Promise.reject(res);
    })
    .then((res) => {
      if (res.status !== 204) return res.json();
      else return res;
    })
    .catch((err) => console.log(err));
}
