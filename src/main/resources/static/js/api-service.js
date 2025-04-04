class ApiService {
  constructor() {
    this.baseUrl = "/api"
  }

  // Authentication
  async login(email, password) {
    try {
      const response = await fetch(`${this.baseUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      return await response.json()
    } catch (error) {
      console.error("Login error:", error)
      throw error
    }
  }

  // Users
  async getUsers() {
    try {
      const response = await fetch(`${this.baseUrl}/users`)
      return await response.json()
    } catch (error) {
      console.error("Error fetching users:", error)
      throw error
    }
  }

  async getUserById(id) {
    try {
      const response = await fetch(`${this.baseUrl}/users/${id}`)
      return await response.json()
    } catch (error) {
      console.error(`Error fetching user ${id}:`, error)
      throw error
    }
  }

  async createUser(userData) {
    try {
      const response = await fetch(`${this.baseUrl}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
      return await response.json()
    } catch (error) {
      console.error("Error creating user:", error)
      throw error
    }
  }

  async updateUser(id, userData) {
    try {
      const response = await fetch(`${this.baseUrl}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
      return await response.json()
    } catch (error) {
      console.error(`Error updating user ${id}:`, error)
      throw error
    }
  }

  async deleteUser(id) {
    try {
      await fetch(`${this.baseUrl}/users/${id}`, {
        method: "DELETE",
      })
      return true
    } catch (error) {
      console.error(`Error deleting user ${id}:`, error)
      throw error
    }
  }

  // Tasks
  async getTasks() {
    try {
      const response = await fetch(`${this.baseUrl}/tasks`)
      return await response.json()
    } catch (error) {
      console.error("Error fetching tasks:", error)
      throw error
    }
  }

  async getTasksByAssignedToId(userId) {
    try {
      const response = await fetch(`${this.baseUrl}/tasks/assignedTo/${userId}`)
      return await response.json()
    } catch (error) {
      console.error(`Error fetching tasks for user ${userId}:`, error)
      throw error
    }
  }

  async createTask(taskData) {
    try {
      const response = await fetch(`${this.baseUrl}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      })
      return await response.json()
    } catch (error) {
      console.error("Error creating task:", error)
      throw error
    }
  }

  async updateTask(id, taskData) {
    try {
      const response = await fetch(`${this.baseUrl}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      })
      return await response.json()
    } catch (error) {
      console.error(`Error updating task ${id}:`, error)
      throw error
    }
  }

  async deleteTask(id) {
    try {
      await fetch(`${this.baseUrl}/tasks/${id}`, {
        method: "DELETE",
      })
      return true
    } catch (error) {
      console.error(`Error deleting task ${id}:`, error)
      throw error
    }
  }

  // Similar methods for other entities (Batches, Attendance, Payroll, Resources)
  // ...
}

// Export the API service
window.ApiService = new ApiService()

