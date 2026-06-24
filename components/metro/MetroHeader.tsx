import { PhoneCall } from "@phosphor-icons/react/ssr";
import { DesignSwitch } from "@/components/DesignSwitch";
import { MetroLogo } from "@/components/metro/Primitives";
import { navItems, phone } from "@/components/metro/data";

export function MetroHeader() {
  return (
    <header className="metro-header">
      <div className="metro-header__inner">
        <MetroLogo />
        <nav aria-label="메인 메뉴" className="metro-nav">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>
        <div className="metro-header__actions">
          <DesignSwitch />
          <a className="metro-phone" href="tel:021234567">
            <PhoneCall aria-hidden="true" size={22} weight="fill" />
            <span>
              <strong>{phone}</strong>
              <em>상담시간 08:00 - 20:00</em>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
