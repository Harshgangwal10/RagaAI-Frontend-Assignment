import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import type { User } from "../types";
import "../styles/Header.css";

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

const Header = ({ user, onLogout }: HeaderProps) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-content-content">
          <h1>Healthcare Admin</h1>
        </div>

        <div className="header-right">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="user-button" aria-label="User menu">
                <span className="user-avatar">{user.email.charAt(0)}</span>
                <span className="user-email">{user.email}</span>
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Content className="dropdown-menu" align="end">
              <DropdownMenu.Label className="dropdown-label">
                {user.name}
              </DropdownMenu.Label>
              <DropdownMenu.Separator className="dropdown-separator" />
              <DropdownMenu.Item
                onClick={onLogout}
                className="dropdown-item logout-item"
              >
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  );
};

export default Header;
