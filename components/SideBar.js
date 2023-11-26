import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, 
  CreditCardIcon, 
  UserIcon, 
  ArrowLeftIcon,  
  CogIcon, 
  UserPlusIcon,
  NewspaperIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CalendarIcon
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Todos os eventos", href: "/todos-os-eventos" },
    { label: "Criar evento", href: "/criar-evento" },
    { label: "Inscrições", href: "/inscricoes" },
    { label: "Certificados", href: "/certificados" },
    { label: "Relatório", href: "/relatorio" },
    { label: "Cadastrados", href: "/cadastrados" },
    { label: "Inscritos", href: "/inscritos" },
    { label: "Alterar dados", href: "/alterar-dados" },
    { label: "Sair", href: "/sair" },
  ];

  return (
    <div ref={ref} className="fixed w-56 h-screen bg-white shadow-sm overflow-y-auto">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-32 h-auto"
            src="/humanitas.jfif"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        {menuItems.map(({ label, href }) => (
          <Link key={label} href={href}>
            <div
              className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                router.pathname === href
                  ? "bg-red-100 text-red-500"
                  : "text-gray-400 hover:bg-red-100 hover:text-red-500"
              }`}
            >
              <div className="mr-2">
                {label === "Home" && <HomeIcon className="h-5 w-5" />}
                {label === "Todos os eventos" && <CalendarIcon className="h-5 w-5" />}
                {label === "Criar evento" && <CreditCardIcon className="h-5 w-5" />}
                {label === "Inscrições" && <UserGroupIcon className="h-5 w-5" />}
                {label === "Certificados" && <DocumentTextIcon className="h-5 w-5" />}
                {label === "Relatório" && <NewspaperIcon className="h-5 w-5" />}
                {label === "Cadastrados" && <UserPlusIcon className="h-5 w-5" />}
                {label === "Inscritos" && <UserIcon className="h-5 w-5" />}
                {label === "Alterar dados" && <CogIcon className="h-5 w-5" />}
                {label === "Sair" && <ArrowLeftIcon className="h-5 w-5" />}
              </div>
              <div>
                <p>{label}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
