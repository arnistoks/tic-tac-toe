import './Board.css';
import Box from "../Box/Box";

const Board = ({board, onClick}) => (
  <div className="board">
    {board.map((value, idx) => {
        return <Box key={idx} value={value} onClick={() => value === null && onClick(idx)} />
    })}
  </div>
);

export default Board;