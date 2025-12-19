import axios from "axios";

const API_URL = "http://localhost:3001/students";

export function getStudents() {
  return axios.get(API_URL);
}

export function addStudent(student) {
  return axios.post(API_URL, student);
}

export function deleteStudent(email) {
  return axios.delete(`${API_URL}/${email}`);
}
