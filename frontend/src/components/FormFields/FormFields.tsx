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
import { postFormData } from "../../utils/postFormData";
import styles from "./FormFields.module.scss";

export interface Props {
  children?: React.ReactNode;
}

export interface State {
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
      shopTypes: [],
      selectedShopType: "",
      targetTypes: [],
      selectedTargetType: "",
      revenueTypes: [],
      selectedRevenueType: "",
    };
  }

  public async getFormInputs() {
    const data = await getFormInputs();
    console.log(data);
    this.setState({
      shopTypes: data.operation_types.map((obj: any) => obj.name),
    });
    this.setState({ targetTypes: data.profiles.map((obj: any) => obj.name) });
    return this.setState({
      revenueTypes: data.yearly_max_revenues.map((obj: any) => obj.revenue),
    });
  }
  public async componentDidMount() {
    await this.getFormInputs();
    return;
  }

  public handleChange(name: string) {
    return (event: React.SyntheticEvent) => {
      console.log(event.target);
      this.setState({
        ...this.state,
        [name]: (event.target as any).value,
      });
    };
  }

  public async handleSubmit(e: any) {
    await postFormData({
      operation_type: this.state.selectedShopType,
      profile: this.state.selectedTargetType,
      revenue: this.state.selectedRevenueType,
    });
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
            onChange={this.handleChange("selectedShopType")}
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
            onChange={this.handleChange("selectedTargetType")}
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
            onChange={this.handleChange("selectedRevenueType")}
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
          onClick={(e) => {
            this.handleSubmit(e);
            this.setState({
              selectedShopType: "",
              selectedTargetType: "",
              selectedRevenueType: "",
            });
          }}
        >
          ZAPLANUJ
        </Button>
      </div>
    );
  }
}
