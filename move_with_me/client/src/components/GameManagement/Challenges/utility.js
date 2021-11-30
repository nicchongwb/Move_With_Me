import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
const getElementList = (elementData, dragStartHandler) => {
  const elements = [];

  Object.keys(elementData).forEach((key) => {
    let { type } = elementData[key];
    switch (type) {
      case "left":
        elements.push(
          <div
            key={key}
            draggable={true}
            onDragStart={(ev) => {
              dragStartHandler(ev, type, true, key);
            }}
          >
            <ArrowLeftOutlined style={{ fontSize: "40px" }} />
          </div>
        );
        break;

      case "right":
        elements.push(
          <div
            key={key}
            style={{}}
            draggable={true}
            onDragStart={(ev) => {
              dragStartHandler(ev, type, true, key);
            }}
          >
            <ArrowRightOutlined style={{ fontSize: "40px" }} />
          </div>
        );
        break;

      case "up":
        elements.push(
          <div
            key={key}
            draggable={true}
            onDragStart={(ev) => {
              dragStartHandler(ev, type, true, key);
            }}
          >
            <ArrowUpOutlined style={{ fontSize: "40px" }} />
          </div>
        );
        break;

      case "down":
        elements.push(
          <div
            key={key}
            draggable={true}
            onDragStart={(ev) => {
              dragStartHandler(ev, type, true, key);
            }}
          >
            <ArrowDownOutlined style={{ fontSize: "40px" }} />
          </div>
        );
        break;

      default:
        break;
    }
  });

  return elements;
};

export { getElementList };
