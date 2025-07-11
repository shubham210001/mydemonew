import * as React from "react";
import { styled } from '@mui/material/styles';
import {
  DataGrid,
  Toolbar,
  ToolbarButton,
  ColumnsPanelTrigger,
  FilterPanelTrigger,
  ExportCsv,
  ExportPrint,
  QuickFilter,
  QuickFilterControl,
  QuickFilterClear,
  QuickFilterTrigger,
} from '@mui/x-data-grid';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import FilterListIcon from '@mui/icons-material/FilterList';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
// import  CustomToolbar  from "./CustomToolBar";
function CustomToolbar() {
  const [exportMenuOpen, setExportMenuOpen] = React.useState(false);
  const exportMenuTriggerRef = React.useRef(null);
  const StyledQuickFilter = styled(QuickFilter)({
  display: 'grid',
  alignItems: 'center',
});
const StyledToolbarButton = styled(ToolbarButton)(({ theme, ownerState }) => ({
  gridArea: '1 / 1',
  width: 'min-content',
  height: 'min-content',
  zIndex: 1,
  opacity: ownerState.expanded ? 0 : 1,
  pointerEvents: ownerState.expanded ? 'none' : 'auto',
  transition: theme.transitions.create(['opacity']),
}));

const StyledTextField = styled(TextField)(({ theme, ownerState }) => ({
  gridArea: '1 / 1',
  overflowX: 'clip',
  width: ownerState.expanded ? 260 : 'var(--trigger-width)',
  opacity: ownerState.expanded ? 1 : 0,
  transition: theme.transitions.create(['width', 'opacity']),
}));
  return (
    <Toolbar>
      <Typography fontWeight="medium" sx={{ flex: 1, mx: 0.5 }}>
        <div style={{ fontSize: "17px", display: "flex" }}>Table</div>
        <div style={{ fontSize: "12px", display: "flex" }}>
          tresting table for the metril UI component
        </div>
      </Typography>

      <Tooltip title="Columns">
        <ColumnsPanelTrigger render={<ToolbarButton />}>
          <ViewColumnIcon fontSize="small" />
        </ColumnsPanelTrigger>
      </Tooltip>

      <Tooltip title="Filters">
        <FilterPanelTrigger
          render={(props, state) => (
            <ToolbarButton {...props} color="default">
              <Badge badgeContent={state.filterCount} color="primary" variant="dot">
                <FilterListIcon fontSize="small" />
              </Badge>
            </ToolbarButton>
          )}
        />
      </Tooltip>

      <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 0.5 }} />
      {/* <Tooltip title="Export">
        <ToolbarButton
          ref={exportMenuTriggerRef}
          id="export-menu-trigger"
          aria-controls="export-menu"
          aria-haspopup="true"
          aria-expanded={exportMenuOpen ? 'true' : undefined}
          onClick={() => setExportMenuOpen(true)}
        >
          <FileDownloadIcon fontSize="small" />
        </ToolbarButton>
      </Tooltip> */}

      {/* <Menu
        id="export-menu"
        anchorEl={exportMenuTriggerRef.current}
        open={exportMenuOpen}
        onClose={() => setExportMenuOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          list: {
            'aria-labelledby': 'export-menu-trigger',
          },
        }}
      >
        <ExportPrint render={<MenuItem />} onClick={() => setExportMenuOpen(false)}>
          Print
        </ExportPrint>
        <ExportCsv render={<MenuItem />} onClick={() => setExportMenuOpen(false)}>
          Download as CSV
        </ExportCsv>
        {/* Available to MUI X Premium users */}
        {/* <ExportExcel render={<MenuItem />}>
           Download as Excel
          </ExportExcel> */}
      {/* </Menu> */} 

      <StyledQuickFilter>
        <QuickFilterTrigger
          render={(triggerProps, state) => (
            <Tooltip title="Search" enterDelay={0}>
              <StyledToolbarButton
                {...triggerProps}
                ownerState={{ expanded: state.expanded }}
                color="default"
                aria-disabled={state.expanded}
              >
                <SearchIcon fontSize="small" />
              </StyledToolbarButton>
            </Tooltip>
          )}
        />
        <QuickFilterControl
          render={({ ref, ...controlProps }, state) => (
            <StyledTextField
              {...controlProps}
              ownerState={{ expanded: state.expanded }}
              inputRef={ref}
              aria-label="Search"
              placeholder="Search..."
              size="small"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  ),
                  endAdornment: state.value ? (
                    <InputAdornment position="end">
                      <QuickFilterClear
                        edge="end"
                        size="small"
                        aria-label="Clear search"
                        material={{ sx: { marginRight: -0.75 } }}
                      >
                        <CancelIcon fontSize="small" />
                      </QuickFilterClear>
                    </InputAdornment>
                  ) : null,
                  ...controlProps.slotProps?.input,
                },
                ...controlProps.slotProps,
              }}
            />
          )}
        />
      </StyledQuickFilter>
    </Toolbar>
  );
}

const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export default function DataGridTable() {
  const initialState = {};
  //   const { data, loading } = useDemoData({
  //     dataSet: 'Employee',
  //     visibleFields: VISIBLE_FIELDS,
  //     rowLength: 200,
  //   });
  const [userList, setUserList] = React.useState([]);

  React.useEffect(() => {
    setUserList([
      {
        id: "john",
        last_name: "brown",
        email: "john@email.com",
        creation_date: "11.11.2021",
      },
      {
        id: "william",
        last_name: "johnson",
        email: "william@email.com",
        creation_date: "11.11.2022",
      },
      {
        id: "mary",
        last_name: "lopez",
        email: "mary@email.com",
        creation_date: "09.05.2022",
      },
      {
        id: "john1",
        last_name: "brown",
        email: "john@email.com",
        creation_date: "11.11.2021",
      },
      {
        id: "william1",
        last_name: "johnson",
        email: "william@email.com",
        creation_date: "11.11.2022",
      },
      {
        id: "mary1",
        last_name: "lopez",
        email: "mary@email.com",
        creation_date: "09.05.2022",
      },
      {
        id: "john2",
        last_name: "brown",
        email: "john@email.com",
        creation_date: "11.11.2021",
      },
      {
        id: "william2",
        last_name: "johnson",
        email: "william@email.com",
        creation_date: "11.11.2022",
      },
      {
        id: "mary2",
        last_name: "lopez",
        email: "mary@email.com",
        creation_date: "09.05.2022",
      },
    ]);
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "first name",
      width: 200,
      height: 50,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "last_name",
      headerName: "last name",
      width: 200,
      height: 50,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "email",
      headerName: "email",
      width: 200,
      height: 50,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "creation_date",
      width: 200,
      height: 50,
      headerName: "Creation Date",
      headerClassName: "super-app-theme--header",
    },
  ];
  return (
    <div>
      <DataGrid
        showToolbar
        rows={userList}
        columns={columns}
        rowHeight={40}
        columnHeaderHeight={40}
        slots={{ toolbar: CustomToolbar }}
        pageSizeOptions={[5, 10, 20, { value: -1, label: "All" }]}
        sx={{
          display: "grid",
          boxShadow: 2,
          width: "100%",
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        disableColumnMenu
      />
    </div>
  );
}

//
