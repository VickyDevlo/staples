import React from "react";
import "./MenuList.css";
import { DehazeOutlined,KeyboardArrowDown} from "@material-ui/icons";

const MenuData = [
  { listText: "products" },
  { listText: "services & solutions" },
  { listText: "brands" },
  { listText: "deals" },
  { listText: "piblications" },
  { listText: "become a customer" },
];

const MenuList = () => {
  return (
    <div>
      <div className="Menu">
        <span className="Bar-Btn">
          <DehazeOutlined />
        </span>

        <ul className="ItemList">
          {MenuData.map((Items,index) => {   
            return (
              
                <li key={index}>
                  {Items.listText}
                <KeyboardArrowDown />
                </li>
              
            );
        })}
        </ul>
          
      </div>
    </div>
  );
};

export default MenuList;
