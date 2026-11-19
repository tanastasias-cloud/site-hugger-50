import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { isTLang } from "@/i18n/lang";

// /ru/... und /uk/... — russische und ukrainische Version der Seiten. Andere Werte -> 404.
export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isTLang(params.lang)) throw notFound();
  },
  component: () => <Outlet />,
});
