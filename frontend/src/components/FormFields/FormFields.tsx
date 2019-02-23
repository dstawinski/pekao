import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import * as React from "react";
import styles from "./FormFields.module.scss";

export interface Props {
  children?: React.ReactNode;
}

export interface State {
  age: number;
  shopTypes: string[];
  selectedShopType: string;
  targetTypes: string[];
  selectedTargetType: string;
}

export default class FormFields extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      age: 10,
      shopTypes: [],
      selectedShopType: "",
      targetTypes: [],
      selectedTargetType: "",
    };
  }

  public getFormInputs() {
    this.setState({ shopTypes: ["Typ1", "Typ2", "Typ3"] });
    this.setState({ targetTypes: ["Typ1", "Typ2", "Typ3"] });
  }

  public async componentDidMount() {
    await this.getFormInputs();
  }

  public render() {
    return (
      <div className={styles.form_fields}>
        <FormControl>
          <InputLabel htmlFor="shoptype-auto-width">
            Typ działalności
          </InputLabel>
          <Select
            value={this.state.selectedShopType}
            onChange={() => {}}
            input={<Input name="shoptype" id="shoptype-auto-width" />}
            autoWidth
            required
          >
            {this.state.shopTypes.map((shopType) => (
              <MenuItem value={shopType}>{shopType}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Wybierz typ swojej działalności</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="targettypes-auto-width">Target</InputLabel>
          <Select
            value={this.state.selectedTargetType}
            onChange={() => {}}
            input={<Input name="targettype" id="targettype-auto-width" />}
            autoWidth
            required
          >
            {this.state.targetTypes.map((targetType) => (
              <MenuItem value={targetType}>{targetType}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Wybierz swój cel</FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="age-auto-width">Age</InputLabel>
          <Select
            value={this.state.age}
            onChange={() => {}}
            input={<Input name="age" id="age-auto-width" />}
            autoWidth
            required
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Auto width</FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          color="secondary"
          className={styles.submit_btn}
        >
          ZAPLANUJ
        </Button>
      </div>
    );
  }
}
