"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Users,
  DollarSign,
  CreditCard,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Building2,
  LineChart,
  Activity,
  Bell,
  Home,
  Settings,
  UserCircle,
  FileText,
  PlusCircle,
  X,
  Menu,
  Search,
  Filter,
  Download,
  Upload,
  Shield,
  Lock,
  Mail,
  Phone,
} from "lucide-react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
];

const userData = [
  {
    id: 1,
    name: "John Smith",
    phone: "+1 (555) 123-4567",
    accountType: "Savings",
    balance: 25000,
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    phone: "+1 (555) 234-5678",
    accountType: "Checking",
    balance: 15000,
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Brown",
    phone: "+1 (555) 345-6789",
    accountType: "Premium",
    balance: 150000,
    status: "Active",
  },
  {
    id: 4,
    name: "Emily Davis",
    phone: "+1 (555) 456-7890",
    accountType: "Business",
    balance: 75000,
    status: "Under Review",
  },
];

const transactionData = [
  {
    id: 1,
    user: "John Smith",
    type: "Deposit",
    amount: 1000,
    timestamp: "2024-03-20 10:00",
    status: "Completed",
  },
  {
    id: 2,
    user: "Sarah Johnson",
    type: "Withdrawal",
    amount: 500,
    timestamp: "2024-03-20 11:30",
    status: "Completed",
  },
  {
    id: 3,
    user: "Michael Brown",
    type: "Transfer",
    amount: 2000,
    timestamp: "2024-03-20 13:45",
    status: "Pending",
  },
  {
    id: 4,
    user: "Emily Davis",
    type: "Deposit",
    amount: 5000,
    timestamp: "2024-03-20 15:20",
    status: "Completed",
  },
];

const reports = [
  {
    id: 1,
    title: "Q1 2024 Performance Report",
    date: "2024-03-20",
    type: "Quarterly Report",
    status: "Published",
  },
  {
    id: 2,
    title: "Risk Assessment Summary",
    date: "2024-03-15",
    type: "Risk Report",
    status: "Under Review",
  },
  {
    id: 3,
    title: "Compliance Audit Results",
    date: "2024-03-10",
    type: "Audit Report",
    status: "Published",
  },
  {
    id: 4,
    title: "Branch Performance Analysis",
    date: "2024-03-05",
    type: "Performance Report",
    status: "Published",
  },
];

const bankSettings = [
  {
    category: "Security",
    settings: [
      { name: "Two-Factor Authentication", status: "Enabled" },
      { name: "IP Whitelisting", status: "Configured" },
      { name: "Session Timeout", value: "30 minutes" },
    ],
  },
  {
    category: "Transaction Limits",
    settings: [
      { name: "Daily Withdrawal Limit", value: "$50,000" },
      { name: "Wire Transfer Limit", value: "$100,000" },
      { name: "ATM Withdrawal Limit", value: "$3,000" },
    ],
  },
  {
    category: "System",
    settings: [
      { name: "System Maintenance Window", value: "Sunday 2 AM EST" },
      { name: "Backup Frequency", value: "Every 4 hours" },
      { name: "Data Retention Period", value: "7 years" },
    ],
  },
];

interface Note {
  id: string;
  content: string;
  color: string;
}

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [notes, setNotes] = useState<Note[]>([
    { id: "1", content: "Review quarterly reports", color: "bg-chart-1/20" },
    { id: "2", content: "Schedule team meeting", color: "bg-chart-2/20" },
    { id: "3", content: "Update security protocols", color: "bg-chart-3/20" },
    {
      id: "4",
      content:
        "give michael server Maintenance perms this week. eleanor:6y7u8i9o",
      color: "bg-chart-4/20",
    },
  ]);
  const [newNoteContent, setNewNoteContent] = useState("");

  const colors = [
    "bg-chart-1/20",
    "bg-chart-2/20",
    "bg-chart-3/20",
    "bg-chart-4/20",
    "bg-chart-5/20",
  ];

  const addNote = () => {
    if (newNoteContent.trim()) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setNotes([
        ...notes,
        {
          id: Date.now().toString(),
          content: newNoteContent,
          color: randomColor,
        },
      ]);
      setNewNoteContent("");
    }
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const renderContent = () => {
    switch (activeSection) {
      case "users":
        return (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>User Management</CardTitle>
              <div className="flex gap-2">
                <Input placeholder="Search users..." className="w-64" />
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button>Add User</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border">
                <div className="grid grid-cols-6 gap-4 p-4 font-medium border-b">
                  <div>Name</div>
                  <div>Phone</div>
                  <div>Account Type</div>
                  <div>Balance</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                {userData.map((user) => (
                  <div
                    key={user.id}
                    className="grid grid-cols-6 gap-4 p-4 border-b last:border-0 items-center"
                  >
                    <div>{user.name}</div>
                    <div>{user.phone}</div>
                    <div>{user.accountType}</div>
                    <div>${user.balance.toLocaleString()}</div>
                    <div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          user.status === "Active"
                            ? "bg-green-500/20 text-green-500"
                            : "bg-yellow-500/20 text-yellow-500"
                        }`}
                      >
                        {user.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case "reports":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Head Office Reports</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Report
                  </Button>
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Download All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium border-b">
                    <div>Report Title</div>
                    <div>Type</div>
                    <div>Date</div>
                    <div>Status</div>
                    <div>Actions</div>
                  </div>
                  {reports.map((report) => (
                    <div
                      key={report.id}
                      className="grid grid-cols-5 gap-4 p-4 border-b last:border-0 items-center"
                    >
                      <div>{report.title}</div>
                      <div>{report.type}</div>
                      <div>{report.date}</div>
                      <div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            report.status === "Published"
                              ? "bg-green-500/20 text-green-500"
                              : "bg-yellow-500/20 text-yellow-500"
                          }`}
                        >
                          {report.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case "settings":
        return (
          <div className="space-y-6">
            {bankSettings.map((category) => (
              <Card key={category.category}>
                <CardHeader>
                  <CardTitle>{category.category} Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.settings.map((setting, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg border"
                      >
                        <div className="flex items-center gap-3">
                          {category.category === "Security" ? (
                            <Shield className="h-5 w-5 text-primary" />
                          ) : category.category === "Transaction Limits" ? (
                            <DollarSign className="h-5 w-5 text-primary" />
                          ) : (
                            <Settings className="h-5 w-5 text-primary" />
                          )}
                          <div>
                            <p className="font-medium">{setting.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {setting.status || setting.value}
                            </p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      default:
        return (
          <>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Customers
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">25,431</div>
                  <p className="text-xs text-muted-foreground">
                    +180 this week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Deposits
                  </CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12.5M</div>
                  <p className="text-xs text-muted-foreground">
                    +12% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Loans
                  </CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,245</div>
                  <p className="text-xs text-muted-foreground">
                    $4.2M total value
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pending Approvals
                  </CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">
                    5 high priority
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Financial Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="hsl(var(--primary))"
                          strokeWidth={2}
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Quick Notes</CardTitle>
                  <Button size="sm" onClick={addNote}>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Note
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type your note..."
                        value={newNoteContent}
                        onChange={(e) => setNewNoteContent(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && addNote()}
                      />
                    </div>
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                      {notes.map((note) => (
                        <div
                          key={note.id}
                          className={`relative p-4 rounded-lg ${note.color} backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 group`}
                        >
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => deleteNote(note.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                          <p className="text-sm">{note.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactionData.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{transaction.user}</p>
                          <p className="text-sm text-muted-foreground">
                            {transaction.type} - {transaction.timestamp}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">
                            ${transaction.amount.toLocaleString()}
                          </p>
                          <p
                            className={`text-sm ${
                              transaction.status === "Completed"
                                ? "text-green-500"
                                : "text-yellow-500"
                            }`}
                          >
                            {transaction.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <Button className="h-24 flex flex-col items-center justify-center space-y-2">
                    <Users className="h-6 w-6" />
                    <span>Manage Users</span>
                  </Button>
                  <Button className="h-24 flex flex-col items-center justify-center space-y-2">
                    <Building2 className="h-6 w-6" />
                    <span>Loan Approvals</span>
                  </Button>
                  <Button className="h-24 flex flex-col items-center justify-center space-y-2">
                    <LineChart className="h-6 w-6" />
                    <span>Reports</span>
                  </Button>
                  <Button className="h-24 flex flex-col items-center justify-center space-y-2">
                    <Activity className="h-6 w-6" />
                    <span>System Status</span>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 transform bg-card border-r border-border transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b border-border">
          <span className="text-lg font-semibold">Admin Panel</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="p-4 space-y-2">
          <Button
            variant={activeSection === "dashboard" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveSection("dashboard")}
          >
            <Home className="mr-2 h-5 w-5" /> Dashboard
          </Button>
          <Button
            variant={activeSection === "users" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveSection("users")}
          >
            <UserCircle className="mr-2 h-5 w-5" /> Users
          </Button>
          <Button
            variant={activeSection === "reports" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveSection("reports")}
          >
            <FileText className="mr-2 h-5 w-5" /> Reports
          </Button>
          <Button
            variant={activeSection === "settings" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveSection("settings")}
          >
            <Settings className="mr-2 h-5 w-5" /> Settings
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`${isSidebarOpen ? "ml-64" : "ml-0"} transition-margin duration-300 ease-in-out`}
      >
        <div className="p-6 space-y-6">
          {/* Top Bar */}
          <div className="flex justify-between items-center">
            {!isSidebarOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <h1 className="text-3xl font-bold">
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="outline">John Admin</Button>
            </div>
          </div>

          {/* Dynamic Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
