// import @mui/material
import { Grid } from '../../../../node_modules/@mui/material/index';

// import componentSkeleton
import ComponentSkeleton from '../ComponentSkeleton';
import Formulary from 'components/formularies/MarketForm';
import DataTable from 'components/Tables/MarketDataTable';

const ComponentMarket = () => (
  <ComponentSkeleton>
    <Grid>
      <Grid>
        <h2>Registar Mercados</h2>
        <Formulary />
      </Grid>
      <Grid>
        <h2>Lista de Mercados</h2>
        <DataTable />
      </Grid>
    </Grid>
  </ComponentSkeleton>
);

export default ComponentMarket;
