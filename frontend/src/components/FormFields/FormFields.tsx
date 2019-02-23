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
import { getFormInputs } from "../../utils/getFormInputs";
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
  revenueTypes: string[];
  selectedRevenueType: string;
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
      revenueTypes: [],
      selectedRevenueType: "",
    };
  }

  public async getFormInputs() {
    const response = await getFormInputs();
    console.log(response);
    this.setState({ shopTypes: ["Typ1", "Typ2", "Typ3"] });
    this.setState({ targetTypes: ["Typ1", "Typ2", "Typ3"] });
    this.setState({ revenueTypes: ["Typ1", "Typ2", "Typ3"] });
  }

  public async componentDidMount() {
    await this.getFormInputs();
    return;
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
          <InputLabel htmlFor="targettypes-auto-width">Cel</InputLabel>
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
          <InputLabel htmlFor="revenue-auto-width">Obroty</InputLabel>
          <Select
            value={this.state.selectedRevenueType}
            onChange={() => {}}
            input={<Input name="revenue" id="revenue-auto-width" />}
            autoWidth
            required
          >
            {this.state.revenueTypes.map((revenueType) => (
              <MenuItem value={revenueType}>{revenueType}</MenuItem>
            ))}
          </Select>
          <FormHelperText>Wybierz wielkość swoich obrotów</FormHelperText>
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
