const axios = require("axios");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} = require("graphql");

//Job Type
const JobType = new GraphQLObjectType({
  name: "Job",
  fields: () => ({
    _id: { type: GraphQLString },
    title: { type: GraphQLString },
    companyName: { type: GraphQLString },
    category: { type: GraphQLString },
    location: { type: GraphQLString },
    applyAt: { type: GraphQLString },
    datePosted: { type: GraphQLString },
  }),
});

const TagType = new GraphQLObjectType({
  name: "Tag",
  fields: () => ({
    title: { type: GraphQLString },
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
    //Tags field
    //DO THESE
    //Gig fields
  },
});

//Mutation
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addJob: {
      type: JobType,
      args: {
        employerName: { type: new GraphQLNonNull(GraphQLString) },
        typeOfWork: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        category: { type: new GraphQLNonNull(GraphQLString) },
        location: { type: GraphQLString },
        applyAt: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const {
          employerName,
          typeOfWork,
          title,
          category,
          location,
          applyAt,
          description,
        } = args;
        return axios
          .post("http://localhost:5050/api/v1/jobs", {
            employerName,
            typeOfWork,
            title,
            category,
            location,
            applyAt,
            description,
          })
          .then((res) => res.data);
      },
    },
  }),
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
