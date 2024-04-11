// import @mui/material
import { Grid } from '../../../../node_modules/@mui/material/index';

// import ComponentSkeleton
import ComponentSkeleton from '../ComponentSkeleton';
import Formulary from 'components/formularies/BusinessForm';
import DataTable from 'components/Tables/BusinessDataTable';

const ProductService = () => (
  <ComponentSkeleton>
    <Grid>
      <Grid>
        <h2>Registar Productos & Serviços</h2>
        <Formulary />
      </Grid>
      <Grid>
        <h2>Lista de Productos & Serviços</h2>
        <DataTable />
      </Grid>
    </Grid>
  </ComponentSkeleton>
);

export default ProductService;
