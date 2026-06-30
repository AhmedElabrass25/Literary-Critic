import {
  PlusCircle,
  MessageCircleMore,
  BarChart3,
  FileText,
  MessageSquareText,
  Users,
  Eye,
} from "lucide-react";

export const dashboardStats = [
  {
    id: 1,
    title: "إجمالي المقالات",
    value: 47,
    change: "+12%",
    icon: FileText,
  },
  {
    id: 2,
    title: "الأسئلة الجديدة",
    value: 9,
    change: "+5%",
    icon: MessageSquareText,
  },
  {
    id: 3,
    title: "المستخدمون",
    value: "1,204",
    change: "+18%",
    icon: Users,
  },
  {
    id: 4,
    title: "عدد الزيارات",
    value: "14,832",
    change: "+27%",
    icon: Eye,
  },
];

export const latestQuestions = [
  {
    id: 1,
    title: "كيف أبدأ في قراءة الأدب الروسي؟",
    author: "محمد أحمد",
    status: "answered",
  },
  {
    id: 2,
    title: "ما الفرق بين البنيوية والتفكيكية؟",
    author: "سارة علي",
    status: "pending",
  },
  {
    id: 3,
    title: "هل الواقعية السحرية مدرسة أم أسلوب؟",
    author: "أحمد خالد",
    status: "answered",
  },
];

export const popularArticles = [
  {
    id: 1,
    title: "الحرب والسلام: حين يصبح الزمن شخصية",
    views: "3.2K",
    likes: 248,
  },
  {
    id: 2,
    title: "قراءة في أدب نجيب محفوظ",
    views: "2.7K",
    likes: 183,
  },
  {
    id: 3,
    title: "مدارس النقد الأدبي الحديثة",
    views: "2.1K",
    likes: 140,
  },
];

export const quickActions = [
  {
    id: 1,
    title: "إنشاء مقال جديد",
    description: "ابدأ بكتابة ونشر مقال جديد.",
    href: "/dashboard/articles/create",
    icon: PlusCircle,
  },
  {
    id: 2,
    title: "الرد على الأسئلة",
    description: "راجع أحدث الأسئلة وأجب عنها.",
    href: "/dashboard/questions",
    icon: MessageCircleMore,
  },
  {
    id: 3,
    title: "عرض الإحصائيات",
    description: "تابع أداء الموقع والمقالات.",
    href: "/dashboard/statistics",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "إدارة المستخدمين",
    description: "عرض وإدارة حسابات المستخدمين.",
    href: "/dashboard/users",
    icon: Users,
  },
];
