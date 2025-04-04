"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Eye, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function MyBatches() {
  const { user, role } = useAuth()
  const [batches, setBatches] = useState([
    {
      id: "1",
      name: "Batch 1",
      start_date: "2023-01-01",
      end_date: "2023-06-30",
      students: 20,
      progress: 100,
      status: "completed",
    },
    {
      id: "2",
      name: "Batch 2",
      start_date: "2023-07-01",
      end_date: "2023-12-31",
      students: 18,
      progress: 65,
      status: "in-progress",
    },
    {
      id: "3",
      name: "Batch 3",
      start_date: "2024-01-15",
      end_date: "2024-06-30",
      students: 22,
      progress: 0,
      status: "upcoming",
    },
  ])

  const [selectedBatch, setSelectedBatch] = useState(null)

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    // No changes needed for now as we're using static data
  }, [])

  if (role !== "lecturer") {
    return <div>Access Denied</div>
  }

  const getBatchStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "in-progress":
        return "bg-blue-100 text-blue-800"
      case "upcoming":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Batches</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-blue-500" />
            My Batches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {batches.map((batch) => (
              <div key={batch.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">{batch.name}</h3>
                    <p className="text-sm text-gray-500">
                      {batch.start_date} to {batch.end_date}
                    </p>
                  </div>
                  <Badge className={getBatchStatusColor(batch.status)}>
                    {batch.status.charAt(0).toUpperCase() + batch.status.slice(1).replace("-", " ")}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{batch.progress}%</span>
                  </div>
                  <Progress value={batch.progress} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span>Students: {batch.students}</span>
                    <Button variant="ghost" size="sm" className="p-0 h-auto" onClick={() => setSelectedBatch(batch)}>
                      <Eye className="h-4 w-4 mr-1" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Batch Details Dialog */}
      <Dialog open={!!selectedBatch} onOpenChange={(open) => !open && setSelectedBatch(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Batch Details</DialogTitle>
            <DialogDescription>Information about {selectedBatch?.name}</DialogDescription>
          </DialogHeader>
          {selectedBatch && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Batch Name</p>
                  <p>{selectedBatch.name}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Status</p>
                  <Badge className={getBatchStatusColor(selectedBatch.status)}>
                    {selectedBatch.status.charAt(0).toUpperCase() + selectedBatch.status.slice(1).replace("-", " ")}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium">Start Date</p>
                  <p>{selectedBatch.start_date}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">End Date</p>
                  <p>{selectedBatch.end_date}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Progress</p>
                <div className="flex items-center space-x-2">
                  <Progress value={selectedBatch.progress} className="h-2 flex-1" />
                  <span className="text-sm">{selectedBatch.progress}%</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Students</p>
                <p>{selectedBatch.students} students enrolled</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

