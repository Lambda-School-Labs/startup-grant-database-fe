import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import Typography from "@material-ui/core/Typography";
import { useAuth0 } from "../../react-auth0-wrapper";
import { fetchApi, adminFetchApi, postGrants, putGrants, deleteGrants } from "../../actions";
import moment from 'moment';

export const GrantTable = (props) => {
  console.log('GrantTable props',props)
  // console.log('GrantTable current user',props.currentUser)
  // console.log('adminprops', props.inAdmin);

  // reformat deadline and last updated dates
  // props.data.forEach(grant => {
  //   grant.most_recent_application_due_date = 
  //     moment(grant.most_recent_application_due_date).format(
  //       "MMM DD, YYYY"
  //     ) === "Invalid date"
  //       ? undefined
  //       : moment(grant.most_recent_application_due_date).format(
  //           "MMM DD, YYYY"
  //     )
  //   grant.details_last_updated = 
  //     moment(grant.details_last_updated).format(
  //       "L LT"
  //     ) === "Invalid date"
  //       ? undefined
  //       : moment(grant.details_last_updated).format(
  //           "L LT"
  //     )
  // })

  const [state, setState] = useState({
    // This array is currently needed in order for state to save onRowUpdate
    data: []
  });

  // const [hasCurrentUser, setHasCurrentUser] = useState({});

  // useEffect(() => {
  //   if (props.inAdmin) {
  //     console.log("what?", props.inAdmin);
  //     console.log("yes");
  //     props.adminFetchApi(props.currentUser);
  //   } else if (props.data.length === 0) {
  //     console.log('elseif');
  //     props.fetchApi();
  //   } else  {
  //     // props.fetchApi();
  //   }
  // }, []);

  console.log("Current user from reducer", props.currentUser);

  useEffect(() => {
      if (props.currentUser.id) {
        props.adminFetchApi(props.currentUser);
      }
  }, [props.currentUser]);

  // TODO: display a count of items needing to be reviewed
  // const needToBeReviewed = props.data.filter(
  //   grant => grant.is_reviewed === false
  // ).length;

  return (
    <div>
      <MaterialTable
        title="Edit and Approve Grants"
        columns={props.columns}
        data={props.data}
        detailPanel={rowData => {
          console.log('rowData', rowData);
          if (rowData.requests.length > 0) 
          {return (
            //create a list that renders each item of requests array and have button to delete each item.
          <h1>HAs suggestions</h1>
          )} else {
            return (
              <h1>There are no suggestions at this time</h1>
            )
          }
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                
                let filteredData = Object.assign({}, newData);
                delete filteredData.requests;

                props.postGrants(filteredData)
                // setState(prevState => {
                //   const data = [...prevState.data];
                //   data.push(newData);
                //   return { ...prevState, data };
                // });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  console.log('old data: ', oldData)
                  console.log('new data: ', newData)

                  let filteredData = Object.assign({}, newData);
                  delete filteredData.requests;

                  props.putGrants(filteredData, props.currentUser)
                  // setState(prevState => {
                  //   const data = [...prevState.data];
                  //   data[data.indexOf(oldData)] = newData;
                  //   return { ...prevState, data };
                  // });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();

                if(oldData){
                console.log('HERE is oldData from DELETE', oldData)
                
                delete oldData.requests
                props.deleteGrants(oldData.id, props.currentUser)
                console.log('HERE is oldData from DELETE', oldData)
                }
                // setState(prevState => {
                //   const data = [...prevState.data];
                //   data.splice(data.indexOf(oldData), 1);
                //   return { ...prevState, data };
                // });
              }, 600);
            })
        }}
        zeroMinWidth
      />
    </div>
  );
}

const mapStateToProps = state => {
  // console.log("GrantList mapStateToProps state", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.filteredGrants,
    grantStore: state.data,
    currentUser: state.currentUser,
    savedFilters: state.filters,
    columns: state.columns
  };
};

export default connect(
  mapStateToProps,
  { fetchApi, adminFetchApi, postGrants, putGrants, deleteGrants }
)(GrantTable);
