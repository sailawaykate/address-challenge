import React from 'react';
import Button from './button';
import DropDownList from './dropdownList';
import '../App.css';

//TODO: make this a variable loaded from an api call
const listData = new Array(3).fill("blah");

const ButtonComponent = () => {
    const [open, setOpen] = React.useState(false);
    const drop = React.useRef(null);

    function handleClick(e) {
        if (!e.target.closest(`.${drop.current.className}`) && open) {
          setOpen(false);
        }
      }

    React.useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
          document.removeEventListener("click", handleClick);
        };
    });

    return (
        <div ref={drop} className="dropdown">
            <Button onClick={() => setOpen(open => !open)} />
            {open && <DropDownList data={listData} setOpen={setOpen} />}
        </div>
    );
};

export default ButtonComponent;
