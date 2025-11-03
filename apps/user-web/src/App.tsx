import "./index.css";
import {Button} from "@dash/ui";

function App() {
    return (
        <div className="flex w-full flex-col">
            <Button
                mode="mono"
                size="md"
                icon={"identify"}
            > 테스트용 </Button>
            <Button
                mode="color_fill"
                size="md"
                icon={"identify"}
            > 테스트용 </Button>
            <Button
                mode="color_line"
                size="md"
                icon={"identify"}
            > 테스트용 </Button>
            <Button
                mode="color_line"
                size="sm"
                icon={"leftArrow"}
            />
            <Button
                mode="mono"
                size="sm"
                icon={"rightArrow"}
            />
        </div>
    );
}

export default App
