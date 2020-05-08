const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

//Job Type
const JobType = new GraphQLObjectType({
  name: "Job",
  fields: () => ({
    _id: { type: GraphQLString },
    companyName: { type: GraphQLString },
    category: { type: GraphQLString },
    location: { type: GraphQLString },
    applyAt: { type: GraphQLString },
    datePosted: { type: GraphQLString },
  }),
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    //Job fields
    jobs: {
      type: GraphQLList(JobType),
      resolve() {
        return axios
          .get("http://localhost:5050/api/v1/jobs")
          .then((res) => res.data);
      },
    },
    job: {
      type: JobType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return axios
          .get(`http://localhost:5050/api/v1/jobs/${args.id}`)
          .then((res) => res.data);
      },
    },
    //Gig fields
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
