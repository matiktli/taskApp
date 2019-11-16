import React from "react";
import * as SQLite from "expo-sqlite";

export default class TaskService {
  constructor() {
    db = this.SQLite.openDatabase("task-data");
  }

  getTasks() {}
}
