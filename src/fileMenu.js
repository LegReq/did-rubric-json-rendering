const evaluationTemplate = {
  "id": "",
  "title": "",
  "url": "",
  "evaluators": [
    {
      "id": "",
      "name": "",
      "email": ""
    }
  ],
  "methods": [
    {
      "id": "",
      "label": "",
      "name": "",
      "specificationUrl": "",
      "networkUrl": "",
      "registry": ""
    }
  ],
  "evaluationDate": "",
  "funding": "",
  "useCases": [
    {
      "id": "",
      "name": "",
      "description": ""
    }
  ],
  "sources": [],
  "categories": [
    {
      "name": "Rulemaking",
      "label": "1",
      "description": "Rulemaking criteria address who makes the rules and how. Output of rulemaking are the rules.",
      "criteria": [
        {
          "name": "Open contribution (participation)",
          "label": "1.1",
          "assessments": [],
          "question": {
            "question": "How open is participation in governance decisions?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes.",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "DID Method Rubric v1.0.0 (draft) ",
            "sourceSection": "2.1.1",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-1"
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Anyone can participate in an open, fair process where all participants have equal opportunity to be heard and influence decisions."
              },
              {
                "label": "B",
                "meaning": "Anyone can comment and contribute to open debate, but decisions are ultimately made by a closed group."
              },
              {
                "label": "C",
                "meaning": "Debate is restricted to a selected but known group."
              },
              {
                "label": "D",
                "meaning": "Debate is conducted in secret by an unknown group."
              }
            ]
          },
          "relevance": "Governance determines how the rules of the underlying network are set and maintained. The more parties that are able to contribute to governance debates, the more decentralized the governance.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-1"
        },
        {
          "name": "Transparency",
          "label": "1.2",
          "assessments": [],
          "question": {
            "question": "How visible are rulemaking processes?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "DID Method Rubric (draft)",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-2",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Agendas and participation details for all governance discussions are publicly announced, any meetings are broadcast in real-time to any listeners, and all minutes and recordings are captured in realtime and publicly reviewable in perpetuity."
              },
              {
                "label": "B",
                "meaning": "Minutes of meetings are reviewable by the public, including all votes and who cast them, but real-time observation may be limited."
              },
              {
                "label": "C",
                "meaning": "All current rules are publicly available."
              },
              {
                "label": "D",
                "meaning": "Rules may be changed without public notice."
              }
            ]
          },
          "relevance": "While participation measures active contribution, transparency measures the visibility of discussions affecting rule making. If such discussions are only visible to a limited group, it centralizes decision making in ways that Evaluators and users cannot easily see.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-2"
        },
        {
          "name": "Separation of Power",
          "label": "1.3",
          "assessments": [],
          "question": {
            "question": "What decision making bodies are involved in rulemaking?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Decision Making Body",
                "type": "enhancedLetter",
                "propertyRef": "decision making body"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "New synthesis, in part from DID Method Rubric v1.0.0 (draft) ",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-5",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Rulemaking rarely occurs in simple structures. Identifying the different organizational entities that participate in setting rules allows evaluators to understand how rules get made. Understanding how rules get helps predict possible future developments."
              }
            ]
          },
          "relevance": "It is worth noting that all entities who are beholden to sovereign states, which is pretty much all corporations, non-profits, and individuals, have consequences for violating the laws, regulations, and lawful court orders within their jurisdiction. Some decentralized systems go to great lengths to minimize the impact of possible coercion, including actions by nation states. It is understood that any participant in the process may be subject to the rule of law from any number of jurisdictions, e.g., patent law, employment law, financial reporting laws, dumping laws, zoning, environmental regulations, etc. As a result, all decision making bodies are subject to the jurisdictions in which they operate.This complexity is true for all DID methods and, to our knowledge, most, if not all, DID methods have no intrinsic relationship to any particular jurisdiction. As such, we do not recommend including jurisdictional players, e.g., nation-states, cities, provinces, etc., as distinct operational layers, unless those players have a distinct role to play for that particular DID method.",
          "id": "https://didcriteria.com/criteria/1"
        },
        {
          "name": "Decision Making Structures",
          "label": "1.4",
          "assessments": [],
          "question": {
            "question": "How is each decision making body structured?",
            "instruction": "Evaluate this criteria for each decision making body from 1.3."
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Decision Making Body",
                "type": "enhancedLetter",
                "propertyRef": "decision making body"
              },
              {
                "heading": "Governance Structure",
                "type": "enhancedLetter",
                "propertyRef": "governance structure"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "New synthesis, in part from DID Method Rubric v1.0.0 (draft) ",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-5",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Individual. Sole proprietorship"
              },
              {
                "label": "B",
                "meaning": "Informal Group. Unincorporated Partnership / Open Community"
              },
              {
                "label": "C",
                "meaning": "For-profit formal organization. For-profit Corporation / LLC / Partnership"
              },
              {
                "label": "D",
                "meaning": "Quasi not-for-profit formal organization. B-Corp https://bcorporation.net/  / CIC https://en.wikipedia.org/wiki/Community_interest_company"
              },
              {
                "label": "E",
                "meaning": "Recognized not-for-profit formal organization. Not-for-profit public benefit organization (NGOs, 501c(3/4/6), etc)"
              },
              {
                "label": "F",
                "meaning": "NGO"
              },
              {
                "label": "G",
                "meaning": "Trade Association"
              },
              {
                "label": "H",
                "meaning": "Charity"
              },
              {
                "label": "I",
                "meaning": "Public agency (federal, state, or local)"
              },
              {
                "label": "J",
                "meaning": "Other"
              }
            ]
          },
          "relevance": "Different governance structures have different implications for how decisions are made and who wields influence throughout the process.",
          "id": "https://didcriteria.com/criteria/2",
          "structureCriteriaId": "https://didcriteria.com/criteria/1"
        },
        {
          "name": "Cost to introduce rule change",
          "label": "1.5",
          "assessments": [],
          "question": {
            "question": "How expensive is it to get a governance decision before each of the deliberating bodies?",
            "instruction": "Evaluate this criteria for each decision making body from 1.3."
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Decision Making Body",
                "type": "enhancedLetter",
                "propertyRef": "decision making body"
              },
              {
                "heading": "Cost",
                "type": "enhancedLetter",
                "propertyRef": "cost"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "New synthesis, in part from DID Method Rubric v1.0.0 (draft) ",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-5",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Free to all"
              },
              {
                "label": "B",
                "meaning": "Inexpensive, but accessible"
              },
              {
                "label": "C",
                "meaning": "Modest cost for interested parties"
              },
              {
                "label": "D",
                "meaning": "Expensive and restricted"
              },
              {
                "label": "E",
                "meaning": "Not possible to participate because the rules are immutable"
              }
            ]
          },
          "relevance": "Governance takes resources, which can limit the ability of interested parties to influence rulemaking. Generally, the more expensive it is to participate, the more governance centralizes to those parties most able to make the investment.",
          "id": "https://didcriteria.com/criteria/3",
          "structureCriteriaId": "https://didcriteria.com/criteria/1"
        },
        {
          "name": "Cost to decide on rule changes",
          "label": "1.6",
          "assessments": [],
          "question": {
            "question": "How expensive is it to participate as a peer in a governance decision by the governing body?",
            "instruction": "Evaluate this criteria for each decision making body from 1.3."
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Decision Making Body",
                "type": "enhancedLetter",
                "propertyRef": "decision making body"
              },
              {
                "heading": "Cost",
                "type": "enhancedLetter",
                "propertyRef": "cost"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "New synthesis, in part from DID Method Rubric v1.0.0 (draft) ",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-5",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Free to all"
              },
              {
                "label": "B",
                "meaning": "Inexpensive, but accessible"
              },
              {
                "label": "C",
                "meaning": "Modest cost for interested parties"
              },
              {
                "label": "D",
                "meaning": "Expensive and restricted"
              },
              {
                "label": "E",
                "meaning": "Not possible to participate because the rules are immutable"
              }
            ]
          },
          "relevance": "Governance takes resources, which can limit the ability of interested parties to influence rulemaking. Generally, the more expensive it is to participate, the more governance centralizes to those parties most able to make the investment.",
          "id": "https://didcriteria.com/criteria/4",
          "structureCriteriaId": "https://didcriteria.com/criteria/1"
        }
      ]
    },
    {
      "name": "Design",
      "label": "2",
      "description": "",
      "criteria": [
        {
          "name": "Cryptocurrency",
          "label": "2.1",
          "assessments": [],
          "question": {
            "question": "What cryptocurrency, if any, is required for Method operations?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Notes.",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "None"
              },
              {
                "label": "B",
                "meaning": "At least one. [List the required crypto-currencies in the notes.]"
              }
            ]
          },
          "relevance": "The use of particular cryptocurrencies create a long term dependency on the viability of those currencies. Such dependency may be a deterrent for some applications. Similarly, if no cryptocurrency is used, there is likely a dependency elsewhere, such as on the organization managing consensus rules and operation.",
          "id": "https://didcriteria.com/criteria/5"
        },
        {
          "name": "Permissioned Operation",
          "label": "2.2",
          "assessments": [],
          "question": {
            "question": "Does one need permission to use the DID Method?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "Iterated from DID Method Rubric v1.0.0 (draft)",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-6",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Anyone can participate fully (full read/write and participation in consensus)."
              },
              {
                "label": "B",
                "meaning": "Anyone can read/write, but consensus mechanism is permissioned."
              },
              {
                "label": "C",
                "meaning": "Anyone can read, but writing and consensus is permissioned."
              },
              {
                "label": "D",
                "meaning": "All participation is permissioned."
              }
            ]
          },
          "relevance": "Permissioned operation impacts the availability of the network to various participants, which can affect inclusivity with regard to underserved or vulnerable populations. Permissioned networks also expose the permission giver to legal or other attacks.",
          "id": "https://didcriteria.com/criteria/6"
        },
        {
          "name": "Interoperability",
          "label": "2.3",
          "assessments": [],
          "question": {
            "question": "Does the DID Method restrict access or functionality to particular client software implementations?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "DID Method Rubric v1.0.0 (draft)",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-7",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Any wallet can work with any resolver on any registry,"
              },
              {
                "label": "B",
                "meaning": "Any wallet can work with multiple resolvers and multiple registries,"
              },
              {
                "label": "C",
                "meaning": "Some implementations of some wallets can work with some resolvers,"
              },
              {
                "label": "D",
                "meaning": "There is a single combined suite of resolver, registry, and wallet."
              }
            ]
          },
          "relevance": "The ability to communicate with different (ideally all) resolvers and registries significantly increases the applicability of a decentralized identity layer / usability of a given wallet. Vice versa, limited capability to work with other Methods and registries restrict usage.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-7"
        },
        {
          "name": "Scope of Usage",
          "label": "2.4",
          "assessments": [],
          "question": {
            "question": "How widely can DIDs of this Method be used?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "DID Method Rubric v1.0.0 (draft)",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-8",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Universal: DIDs can only be created and used universally, between any number of parties."
              },
              {
                "label": "B",
                "meaning": "Contextual: DIDs can be created and used contextually, between any set of collaborating parties."
              },
              {
                "label": "C",
                "meaning": "Paired: DID can be created and used pairwise, between any two parties."
              },
              {
                "label": "D",
                "meaning": "Central: DIDs can only be created and used with a single, centralized party."
              }
            ]
          },
          "relevance": "Different Methods enable different scopes in which a DID might be considered usable or valid. Some DIDs are only resolvable within a limited context, others are suitable for global use. Contextual DIDs are a middle ground that allow a set of parties to use DIDs, while those outside that group cannot meaningfully do so. Finally, central DIDs use the DID syntax and DID Documents to establish secure communications, but authority to use these DIDs resides with the central party, who may revoke that ability at their discretion.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-8"
        },
        {
          "name": "Offline creation",
          "label": "2.5",
          "assessments": [],
          "question": {
            "question": "Does the Method require network communications to create a DID?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Notes.",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "No. Creation is expected to be off-line. Only resolution, updates and deactivations require network or registry interaction"
              },
              {
                "label": "B",
                "meaning": "Yes. Creation requires network coordination with a single party to complete the DID creation"
              },
              {
                "label": "C",
                "meaning": "Yes. Creation requires network coordination with multiple parties in a known, constrained group to complete the DID creation"
              },
              {
                "label": "D",
                "meaning": "Yes. Creation requires network coordination with and acceptance by an open, global consensus system to complete DID creation"
              }
            ]
          },
          "relevance": "Communication is costly, with increasing costs the more parties are involved. This cost is not just in terms of the connection expense, but also the latency in processing transactions. The ability to create a DID without registering it on a global shared state greatly reduces the technical and financial cost of the method.",
          "id": "https://didcriteria.com/criteria/7"
        },
        {
          "name": "Update Scalability",
          "label": "2.6",
          "assessments": [],
          "question": {
            "question": "Assuming an average of no more than 1 update per quarter, how many DIDs can this method support?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Greater than 5 billion"
              },
              {
                "label": "B",
                "meaning": "Greater than 1 billion"
              },
              {
                "label": "C",
                "meaning": "Greater than 500 million"
              },
              {
                "label": "D",
                "meaning": "Greater than 50 million"
              },
              {
                "label": "E",
                "meaning": "Greater than 5 million"
              },
              {
                "label": "F",
                "meaning": "Less than 5 million"
              }
            ]
          },
          "relevance": "Some DID methods may be able to support the world's population, others may be more suitable to a particular type of use where only a small number of DIDs need to be supported. This gives a rough idea of the population base you may expect a particular DID method to support.",
          "id": "https://didcriteria.com/criteria/8"
        },
        {
          "name": "Creation Cost",
          "label": "2.7",
          "assessments": [],
          "question": {
            "question": "How much does it cost a DID creator to create a DID?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Only operational costs of running the algorithm (no externalized expense)"
              },
              {
                "label": "B",
                "meaning": "Less than $0.01"
              },
              {
                "label": "C",
                "meaning": "Less than $0.10"
              },
              {
                "label": "D",
                "meaning": "Less than $1"
              },
              {
                "label": "E",
                "meaning": "Less than $10"
              },
              {
                "label": "F",
                "meaning": "$10 or greater"
              }
            ]
          },
          "relevance": "Almost all operations are sensitive to the cost of creating the underlying identifiers. If such costs are close to zero, broad use of ephemeral keys is possible. As costs increase, it becomes more and more necessary to limit the number of identifiers created in order to keep systems.",
          "id": "https://didcriteria.com/criteria/9"
        },
        {
          "name": "Update & Deletion Cost (Out-of-pocket)",
          "label": "2.8",
          "assessments": [],
          "question": {
            "question": "How much does it cost*, out of pocket, to update or deactivate a DID Document? If the method has a tiered or variable cost structure, list all responses that apply and specify the cost structure in the notes. *This is the cost to the DID Document controller."
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Only operational costs of running the algorithm (no externalized expense)"
              },
              {
                "label": "B",
                "meaning": "Less than $0.01"
              },
              {
                "label": "C",
                "meaning": "Less than $0.10"
              },
              {
                "label": "D",
                "meaning": "Less than $1"
              },
              {
                "label": "E",
                "meaning": "Less than $10"
              },
              {
                "label": "F",
                "meaning": "$10 or greater"
              }
            ]
          },
          "relevance": "Depending on the method and governance, the price of updating and deleting a DID Document will inform the cost of doing business with the particular method. Depending on the use case in mind this can be used, along with the scalability questions, to estimate the cost of maintaining a network using this DID method.",
          "id": "https://didcriteria.com/criteria/10"
        },
        {
          "name": "Update & Deletion Cost (in-kind)",
          "label": "2.9",
          "assessments": [],
          "question": {
            "question": "How much does it cost to update or deactivate a DID Document using in-kind contributions?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Only operational costs of running the algorithm (no externalized expense)"
              },
              {
                "label": "B",
                "meaning": "Less than $0.01"
              },
              {
                "label": "C",
                "meaning": "Less than $0.10"
              },
              {
                "label": "D",
                "meaning": "Less than $1"
              },
              {
                "label": "E",
                "meaning": "Less than $10"
              },
              {
                "label": "F",
                "meaning": "$10 or greater"
              }
            ]
          },
          "relevance": "Depending on the method and governance, there may be ways of reducing (or removing) the cost of Updating or Deleting a DID Document, such as volunteering with the governance body or doing a set of work the network needs done.",
          "id": "https://didcriteria.com/criteria/11"
        }
      ]
    },
    {
      "name": "Operation",
      "label": "3",
      "description": "Operation criteria address how the rules are operationalized, ie., how are the rules embodied in a working system.",
      "criteria": [
        {
          "name": "Financial accountability",
          "label": "3.1",
          "assessments": [],
          "question": {
            "question": "How transparent are the economics of the Method?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "Iteration from DID Method Rubric v1.0.0 (draft)",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-9",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "All operational finances are transparent and accounted for."
              },
              {
                "label": "B",
                "meaning": "Compensation for primary operators is transparent."
              },
              {
                "label": "C",
                "meaning": "Some financial flows are visible."
              },
              {
                "label": "D",
                "meaning": "Operation is privatized with no visibility."
              }
            ]
          },
          "relevance": "Similar to Governance criterion #3, financial accountability reflects the integrity and sustainability of the DID registry. The more open, transparent, and accountable the system, the greater the confidence a DID controller may have that it will remain stable and operational, and therefore continue to provide service.",
          "id": "https://didcriteria.com/criteria/12"
        },
        {
          "name": "Transactional Performance - Global Create Bandwidth",
          "label": "3.2",
          "assessments": [],
          "question": {
            "question": "How many DIDs of this method can be created per time period, globally?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes.",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "More than 1,000,000 Transactions Per Second"
              },
              {
                "label": "B",
                "meaning": "100,001 - 1,000,000 TPS"
              },
              {
                "label": "C",
                "meaning": "10,001 - 100,000 TPS"
              },
              {
                "label": "D",
                "meaning": "1,001 - 10,000 TPS"
              },
              {
                "label": "E",
                "meaning": "101 - 1,000 TPS"
              },
              {
                "label": "F",
                "meaning": "11 - 100 TPS"
              },
              {
                "label": "G",
                "meaning": "1-10 TPS"
              },
              {
                "label": "H",
                "meaning": "Less than 1 TPS"
              }
            ]
          },
          "relevance": "The number of new DIDs that can be created in a second inform the scalability of the network in regards to onboarding new users and allowing for new uses by existing users.",
          "id": "https://didcriteria.com/criteria/13"
        },
        {
          "name": "Transactional Performance -- Global Update Bandwidth",
          "label": "3.3",
          "assessments": [],
          "question": {
            "question": "How many DIDs can be updated per second, globally?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "More than 1,000,000 Transactions Per Second"
              },
              {
                "label": "B",
                "meaning": "10,001 - 1,000,000 TPS"
              },
              {
                "label": "C",
                "meaning": "101 - 10,000 TPS"
              },
              {
                "label": "D",
                "meaning": "11 - 100 TPS"
              },
              {
                "label": "E",
                "meaning": "1-10 TPS"
              },
              {
                "label": "F",
                "meaning": "Less than 1 TPS"
              }
            ]
          },
          "relevance": "Along with creation, update performance of the registry can inform as to how many users make use of the Method at any given time.",
          "id": "https://didcriteria.com/criteria/14"
        },
        {
          "name": "Update Latency",
          "label": "3.4",
          "assessments": [],
          "question": {
            "question": "How much time does it take for an update to become globally available after submission by the DID controller?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Less than 1 second"
              },
              {
                "label": "B",
                "meaning": "1 to < 60 seconds"
              },
              {
                "label": "C",
                "meaning": "1 to < 10 min"
              },
              {
                "label": "D",
                "meaning": "10 min to < 1 hour"
              },
              {
                "label": "E",
                "meaning": "1 hour to < 1 day"
              },
              {
                "label": "F",
                "meaning": "1 day to 2 weeks"
              },
              {
                "label": "G",
                "meaning": "Greater than two weeks"
              },
              {
                "label": "H",
                "meaning": "Updates not guaranteed"
              }
            ]
          },
          "relevance": "Different registry mechanisms have different guarantees for some notion of finality. The longer one has to wait for confirmation, the greater the latency for high security transactions. The shorter the duration, the more one has to critically validate the race conditions that may be present in determining finality. Depending on the algorithm, there are likely trade-offs between the stability of consensus and the speed at which consensus is pursued.",
          "id": "https://didcriteria.com/criteria/15"
        },
        {
          "name": "Operational Reliability",
          "label": "3.5",
          "assessments": [],
          "question": {
            "question": "For each layer, how many operational components may be offline without that layer losing availability?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Layer",
                "type": "enhancedLetter",
                "propertyRef": "layer"
              },
              {
                "heading": "Response",
                "type": "enhancedLetter",
                "propertyRef": "response"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": null,
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Equation based on the consensus algorithm"
              },
              {
                "label": "B",
                "meaning": "Known number"
              },
              {
                "label": "C",
                "meaning": "Percentage"
              },
              {
                "label": "D",
                "meaning": "NONE (specific components MUST be operational)"
              },
              {
                "label": "E",
                "meaning": "OPTIONAL (operations do not depend on the layer being available)"
              }
            ]
          },
          "relevance": "Along with the type of consensus algorithm the number of offline nodes has both security--i.e. DDOS attacks--and reliability implications.",
          "id": "https://didcriteria.com/criteria/16"
        },
        {
          "name": "Operational Security",
          "label": "3.6",
          "assessments": [],
          "question": {
            "question": "How many operational components may be compromised without compromising the network?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Layer",
                "type": "enhancedLetter",
                "propertyRef": "layer"
              },
              {
                "heading": "Response",
                "type": "enhancedLetter",
                "propertyRef": "response"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": null,
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Equation based on the consensus algorithm"
              },
              {
                "label": "B",
                "meaning": "Known number"
              },
              {
                "label": "C",
                "meaning": "Percentage"
              },
              {
                "label": "D",
                "meaning": "Unknown"
              },
              {
                "label": "E",
                "meaning": "N/A -- If the algorithm isn’t dependent on the particular layer"
              }
            ]
          },
          "relevance": "Informs how easy it may be to orchestrate a take over of the network and get false transactions accepted by the consensus mechanism.",
          "id": "https://didcriteria.com/criteria/17"
        }
      ]
    },
    {
      "name": "Enforcement",
      "label": "4.",
      "description": "Criteria in this section deal with the design rules that enable maintaining the integrity of the verifiable data registry (VDR) and the means of applying those rules. Enforcement is the proper execution of the process of ensuring compliance with laws, regulations, rules, standards, and social norms. This includes how the rule of law is applied to entities involved in governance and operation of the method.",
      "criteria": [
        {
          "name": "Auditability",
          "label": "4.1",
          "assessments": [],
          "question": {
            "question": "Who can retrieve cryptographic proof of the history of changes to a given DID Document?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "DID Method Rubric v1.0.0 (draft)",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-12",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Anyone"
              },
              {
                "label": "B",
                "meaning": "Only a select group, including parties not involved in a given DID transaction"
              },
              {
                "label": "C",
                "meaning": "Only parties to the transaction"
              },
              {
                "label": "D",
                "meaning": "Not available"
              }
            ]
          },
          "relevance": "Trustlessness is a prerequisite of a decentralized system. If you have to trust the source of a DID Document (i.e., if you can’t verify cryptographically a DID Document that is returned from resolution), then you are at the mercy of a potentially centralized authority. If, instead, you have a cryptographic audit trail, then the current state of a DID cannot be compromised by an intermediary or central party.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-12"
        },
        {
          "name": "Governance Jurisdiction",
          "label": "4.2",
          "assessments": [],
          "question": {
            "question": "In which jurisdiction is the governing body located?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Decision Making Body",
                "type": "enhancedLetter",
                "propertyRef": "decision making body"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": null,
          "relevance": "Different jurisdictions have different laws which may affect the operation of the method.",
          "id": "https://didcriteria.com/criteria/18",
          "structureCriteriaId": "https://didcriteria.com/criteria/1"
        },
        {
          "name": "Operational Diversity",
          "label": "4.3",
          "assessments": [],
          "question": {
            "question": "How many independent legal entities currently maintain the operational integrity of the Verifiable Data Registries?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Open ended, unknown, or unknowable."
              },
              {
                "label": "B",
                "meaning": "Capped. [State lower and upper bounds in Notes.]"
              },
              {
                "label": "C",
                "meaning": "One"
              },
              {
                "label": "D",
                "meaning": "Zero"
              }
            ]
          },
          "relevance": "Singular--or small numbers of--entities controlling the consensus of a network can orchestrate malicious attacks.",
          "id": "https://didcriteria.com/criteria/19"
        },
        {
          "name": "Registry Consensus",
          "label": "4.4",
          "assessments": [],
          "question": {
            "question": "What type of integrity mechanism is used by the method’s Verifiable Data Registry?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Proof of Work"
              },
              {
                "label": "B",
                "meaning": "Proof of Stake"
              },
              {
                "label": "C",
                "meaning": "BFT algorithm based"
              },
              {
                "label": "D",
                "meaning": "Electoral ‒ Select parties vote with thresholds"
              },
              {
                "label": "E",
                "meaning": "Unanimous ‒ All parties countersign"
              },
              {
                "label": "F",
                "meaning": "Unilateral ‒ Latest signed version defined as authentic"
              },
              {
                "label": "G",
                "meaning": "Standards-based specifications determined by institutional authority, used by anyone"
              },
              {
                "label": "H",
                "meaning": "Other ‒ Add your own"
              }
            ]
          },
          "relevance": "The consensus mechanism used by the method registry has implications for scalability, speed of operations, security and possibly environmental impact.",
          "id": "https://didcriteria.com/criteria/20"
        },
        {
          "name": "Operational Layers",
          "label": "4.5",
          "assessments": [],
          "question": {
            "question": "What layers of operational components establish and maintain integrity of the Verifiable Data Registry?",
            "instruction": "For each layer, evaluate criteria 4.6, 3.5, and 3.6."
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Layer",
                "type": "enhancedLetter",
                "propertyRef": "layer"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "List each layer"
              }
            ]
          },
          "relevance": "The manner in which a Verifiable Data Registry (VDR) manages integrity defines how that integrity might be compromised. To understand how the VDR of a given Method maintains integrity, this criteria identifies the operational components of the VDR for further evaluation in other criteria, namely 4.6, 3.5, and 3.6.Unfortunately, network topology inevitably introduces parties that may be able to disrupt or compromise network interactions. For example, DNS servers--often under the control of the user’s ISP or the corporate IT department--can return “fake” IP addresses; corporate firewalls can prevent traffic to or from certain addresses; corporate system administrators may prevent users from configuring alternative Certificate Authorities, even international internet traffic can be restricted or denied, purely at the network layer.Because nearly every DID method known at this point depends on Internet-based networking, every DID method faces these same problems. As such, we don’t recommend specifying common network components as distinct layers unless those layers have specific roles unique to the particular DID method.For this criteria, we are talking about the operational components that have specific, unique, or privileged roles with regard to the evaluated DID Method(s). The parties which fulfill said roles should be considered when evaluating the fitness of the given method(s).",
          "id": "https://didcriteria.com/criteria/21"
        },
        {
          "name": "Layer Diversity",
          "label": "4.6",
          "assessments": [],
          "question": {
            "question": "How many operational components need to be compromised to compromise the verifiable data registry (evaluate for each operational component)?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Layer",
                "type": "enhancedLetter",
                "propertyRef": "layer"
              },
              {
                "heading": "Response",
                "type": "enhancedLetter",
                "propertyRef": "response"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": null,
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Open ended, unknown, or unknowable."
              },
              {
                "label": "B",
                "meaning": "Capped. [State upper and lower bounds in Notes.]"
              },
              {
                "label": "C",
                "meaning": "One"
              }
            ]
          },
          "relevance": "Along with the type of consensus algorithm, the number of nodes that can participate in consensus has implications towards network security and reliability.",
          "id": "https://didcriteria.com/criteria/22",
          "structureCriteriaId": "https://didcriteria.com/criteria/21"
        },
        {
          "name": "Verification Relationships",
          "label": "4.7",
          "assessments": [],
          "question": {
            "question": "What verification relationships are supported by the method per specification?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "None"
              },
              {
                "label": "B",
                "meaning": "Authentication"
              },
              {
                "label": "C",
                "meaning": "AssertionMethod"
              },
              {
                "label": "D",
                "meaning": "Key Agreement"
              },
              {
                "label": "E",
                "meaning": "CapabilityInvocation"
              },
              {
                "label": "F",
                "meaning": "CapabilityDelegation"
              },
              {
                "label": "G",
                "meaning": "Other"
              },
              {
                "label": "H",
                "meaning": "Any"
              }
            ]
          },
          "relevance": "The verification relationships a method supports inform the ways in which DIDs of the method can be used. See section 5.3 of the DID-Core specification for details on verification relationships. https://www.w3.org/TR/did-core/#verification-relationships",
          "id": "https://didcriteria.com/criteria/23"
        },
        {
          "name": "Authentication Model",
          "label": "4.8",
          "assessments": [],
          "question": {
            "question": "How does the method authenticate a given DID operation as coming from the legitimate DID controller?",
            "instruction": "Include as many as apply to this Method."
          },
          "assessmentTemplate": {
            "columns": null
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Method"
              }
            ]
          },
          "id": "https://didcriteria.com/criteria/24"
        }
      ]
    },
    {
      "name": "Adoption (and diversity)",
      "label": "5.",
      "description": "Adoption criteria address how widely the method and its implementations are used by various parties and systems.",
      "criteria": [
        {
          "name": "Financial Entanglements",
          "label": "5.1",
          "assessments": [],
          "question": {
            "question": "How was the Method funded?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes.",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "State-sponsored funding"
              },
              {
                "label": "B",
                "meaning": "Regulated not-for-profit entity"
              },
              {
                "label": "C",
                "meaning": "Private equity"
              },
              {
                "label": "D",
                "meaning": "Operational budget"
              },
              {
                "label": "E",
                "meaning": "Cryptocurrency"
              },
              {
                "label": "F",
                "meaning": "Tokenized Initial Coin Offering"
              },
              {
                "label": "G",
                "meaning": "Initial Public Offering (public equity funding)"
              },
              {
                "label": "H",
                "meaning": "Other -- State what in the notes"
              }
            ]
          },
          "relevance": "Funding can create financial entanglements. Those methods that depend on outside financing should be further evaluated to understand the potential consequences of funding to-date.",
          "id": "https://didcriteria.com/criteria/25"
        },
        {
          "name": "Organizational Maturity in Time",
          "label": "5.2",
          "assessments": [],
          "question": {
            "question": "How long has the organization(s) behind the Method been operational?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes.",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Over 20 years"
              },
              {
                "label": "B",
                "meaning": "Over 10 years"
              },
              {
                "label": "C",
                "meaning": "Over 5 years"
              },
              {
                "label": "D",
                "meaning": "Over 1 year"
              },
              {
                "label": "E",
                "meaning": "Less than 1 year"
              },
              {
                "label": "F",
                "meaning": "There is no organization per se"
              }
            ]
          },
          "relevance": "The age of the organization(s) behind a Method can be used to give an idea into organizational maturity. It is not a sole indicator and should be taken as a data point in evaluating the Method organization’s current state.",
          "id": "https://didcriteria.com/criteria/26"
        },
        {
          "name": "Release Status",
          "label": "5.3",
          "assessments": [],
          "question": {
            "question": "Can the method be used for production today?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Yes. A production system is available to the general population."
              },
              {
                "label": "B",
                "meaning": "No. A test network is operational."
              },
              {
                "label": "C",
                "meaning": "No. Only an internal developer network is operational."
              },
              {
                "label": "D",
                "meaning": "No. The software is not yet running on any network."
              }
            ]
          },
          "relevance": "Some errors only become apparent after sufficient time to test edge cases and performance boundaries.",
          "id": "https://didcriteria.com/criteria/27"
        },
        {
          "name": "Maturity",
          "label": "5.4",
          "assessments": [],
          "question": {
            "question": "How long has the underlying network/registry been available to third parties for non-trivial use?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "The network/registry has been operationalized for ten years or more."
              },
              {
                "label": "B",
                "meaning": "The network/registry has been operationalized for five years or more"
              },
              {
                "label": "C",
                "meaning": "The network/registry has been operationalized for one year or more"
              },
              {
                "label": "D",
                "meaning": "The network/registry has been operationalized for less than one year"
              },
              {
                "label": "E",
                "meaning": "The network/registry is not operationalized for non-trivial use"
              }
            ]
          },
          "relevance": "Some errors only become apparent after sufficient time to test edge cases and performance boundaries.",
          "id": "https://didcriteria.com/criteria/28"
        }
      ]
    },
    {
      "name": "Security",
      "label": "6",
      "description": "Security criteria address how the method is cryptographically secured.",
      "criteria": [
        {
          "name": "Robust Crypto",
          "label": "6.1",
          "assessments": [],
          "question": {
            "question": "What is the lowest security level (“bits of security”)[1] allowed in the processes that ensure integrity of the verifiable data registry?",
            "instruction": "[1]  https://en.wikipedia.org/wiki/Security_level"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "DID Method Rubric v1.0.0 (draft)",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-24",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "No combination of required features produces a profile with less than 256 bits of security."
              },
              {
                "label": "B",
                "meaning": "Between 128 and 256 bits"
              },
              {
                "label": "C",
                "meaning": "Less than 128 bits"
              },
              {
                "label": "D",
                "meaning": "Less than 64 bits"
              }
            ]
          },
          "relevance": "A DID method that requires implementations to support something weak (e.g., 1024-bit RSA) is guaranteeing that its users will cooperate by default with encryption that's relatively easy to crack, with hashing that's not adequately collision-resistant, etc.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-24"
        },
        {
          "name": "Expert Review (Cryptography)",
          "label": "6.2",
          "assessments": [],
          "question": {
            "question": "Does the system use cryptographic and security primitives that are well vetted by technical experts, and battle hardened in the school of experience?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "DID Method Rubric v1.0.0 (draft)",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-25",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Experts generally consider the system very secure, and this opinion is reinforced by a track record of secure production use."
              },
              {
                "label": "B",
                "meaning": "The theoretical security of the system looks excellent, and no known attacks or substantive criticisms are unaddressed. However, limited review or limited experience informs the opinion."
              },
              {
                "label": "C",
                "meaning": "Credible reports of vulnerabilities or design shortcomings have not been addressed."
              },
              {
                "label": "D",
                "meaning": "The system actively uses mechanisms that are officially deprecated."
              },
              {
                "label": "E",
                "meaning": "The system uses mechanisms that have not been vetted."
              }
            ]
          },
          "relevance": "Exotic crypto and other security mechanisms without expert review and a production track record is likely to contain hidden risks.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-25"
        },
        {
          "name": "Expert Review (Consensus)",
          "label": "6.3",
          "assessments": [],
          "question": {
            "question": "If the method makes use of a distributed consensus mechanism, has the registry’s consensus mechanism undergone sufficient review?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Yes. A formal proof has been published in a peer reviewed journal"
              },
              {
                "label": "B",
                "meaning": "Yes. A formal proof has been published"
              },
              {
                "label": "C",
                "meaning": "No. An informal argument has been published"
              },
              {
                "label": "D",
                "meaning": "No. The consensus algorithm is opaque to registry users."
              }
            ]
          },
          "relevance": "Decentralized systems are notoriously difficult to get right. Consensus ordering, in particular, is known to be a hard problem solved by distributed ledgers. Even simpler registries may trade off provable finality with probabilistic finality. It is vital that the Method used for high-value or life-critical application be rigorously evaluated for potential flaws.",
          "id": "https://didcriteria.com/criteria/29"
        },
        {
          "name": "Availability",
          "label": "6.4",
          "assessments": [],
          "question": {
            "question": "How robust are protections against attempts to suppress information flow, whether legal (cease and desist) or technical (denial of service)?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "DID Method Rubric v1.0.0 (draft)",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-28",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "The VDR is practically immune from this risk."
              },
              {
                "label": "B",
                "meaning": "The VDR has reasonable protections in place. However, motivated and well resourced attackers could temporarily disrupt access in a targeted context."
              },
              {
                "label": "C",
                "meaning": "Attackers could permanently disrupt access in a targeted context."
              }
            ]
          },
          "relevance": "Control over an identifier is far less valuable if the propagation of that control can be limited by someone else.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-28"
        },
        {
          "name": "Provenance",
          "label": "6.5",
          "assessments": [],
          "question": {
            "question": "Is the current state of a DID document provably correct from a history that's visible to anyone who can resolve the DID?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "source": {
            "sectionRef": "DID Method Rubric v1.0.0 (draft)",
            "sourceRef": "https://www.w3.org/TR/did-rubric#criteria-29",
            "sourceSection": ""
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "The update history of the DID document is recorded, accessible, and linked appropriately to its predecessor. Arbitrary versions can be queried and proved correct, and they have a reasonably useful timestamp."
              },
              {
                "label": "B",
                "meaning": "The update history of the DID document exists, and a forensic analysis could prove correctness. However, it's not exposed for consumption of ordinary resolvers, it lacks supporting metadata, or it's exposed in a very suboptimal way."
              },
              {
                "label": "C",
                "meaning": "Limited evidence of proper DID document updates exists."
              },
              {
                "label": "D",
                "meaning": "No evidence of proper DID document updates exist; the user has to trust the system's assertion that the current state resulted from something appropriate."
              }
            ]
          },
          "relevance": "It's possible to tamper with systems that don't actively prove the correctness of their current state. Such tampering is not easy to discover.",
          "id": "https://www.w3.org/TR/did-rubric#criteria-29"
        },
        {
          "name": "United States Federal Compliance",
          "label": "6.6",
          "assessments": [],
          "question": {
            "question": "Is the Method compliant with US Federal requirements for the use of cryptography?"
          },
          "assessmentTemplate": {
            "columns": [
              {
                "heading": "Method",
                "type": "method",
                "propertyRef": "method"
              },
              {
                "heading": "Spec.",
                "type": "enhancedLetter",
                "propertyRef": "spec"
              },
              {
                "heading": "Net.",
                "type": "enhancedLetter",
                "propertyRef": "net"
              },
              {
                "heading": "Reg.",
                "type": "enhancedLetter",
                "propertyRef": "reg"
              },
              {
                "heading": "Notes.",
                "type": "note",
                "propertyRef": "note"
              }
            ]
          },
          "response": {
            "type": "multipleChoice",
            "possibleResponses": [
              {
                "label": "A",
                "meaning": "Both registry consensus *and* transaction validation are compliant"
              },
              {
                "label": "B",
                "meaning": "Transaction validation is compliant but consensus is not"
              },
              {
                "label": "C",
                "meaning": "No. Neither consensus nor transactions are compliant"
              }
            ]
          },
          "relevance": "Many US Federal programs and projects require use of cryptography according to standards set by the National Institute of Standards and Technology (NIST), such as:FIPS 186-5 (https://csrc.nist.gov/publications/detail/fips/186/5/draft)NIST 800-131Ar2 (https://csrc.nist.gov/publications/detail/sp/800-131a/rev-2/final)SP 800-186 (https://csrc.nist.gov/publications/detail/sp/800-186/draft)NIST FIPS 186-4 https://csrc.nist.gov/publications/detail/fips/186/4/final)NIST 800-38D (https://csrc.nist.gov/publications/detail/sp/800-38d/final)NIST 800-38F (https://csrc.nist.gov/publications/detail/sp/800-38f/final)FIPS 180-4 (https://csrc.nist.gov/publications/detail/fips/180/4/final)FIPS 800-107r1. (https://csrc.nist.gov/publications/detail/sp/800-107/rev-1/final)",
          "id": "https://didcriteria.com/criteria/30"
        }
      ]
    }
  ]
}

document.addEventListener("DOMContentLoaded", () => {
  const loadButton = document.getElementById("load-evaluation");
  const fileInput = document.getElementById("file-input");

  if (!loadButton || !fileInput) {
    console.error("Load button or file input not found in the document.");
    return;
  }

  loadButton.addEventListener("click", (e) => {
    e.preventDefault();
    fileInput.click(); // opens file dialog
  });

  fileInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const text = await file.text();
      const evaluationData = JSON.parse(text);

      // If renderEvaluation can accept a data object:
      if (typeof renderEvaluation === 'function') {
        renderEvaluation(evaluationData);
      } else {
        console.error('renderEvaluation is not defined or not a function.');
      }
    } catch (error) {
      console.error("Failed to load evaluation:", error);
      alert("Error loading evaluation file. Please make sure it’s a valid JSON file.");
    }

    // Reset file input so user can re-select the same file if needed
    event.target.value = '';
  });

  const newEvalBtn = document.getElementById("new-evaluation");

  newEvalBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    try {
      // Step 1: Fetch the template file
      const template = evaluationTemplate

      // Step 2: Show the save file dialog
      const handle = await window.showSaveFilePicker({
        suggestedName: "new-evaluation.json",
        types: [{
          description: 'JSON Files',
          accept: { 'application/json': ['.json'] },
        }]
      });

      // Step 3: Write the file
      const writable = await handle.createWritable();
      await writable.write(JSON.stringify(template, null, 2));
      await writable.close();

      renderEvaluation(template)
      alert("New evaluation file created successfully!");
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Error creating new evaluation:", err);
        alert("Something went wrong.");
      }
    }
  });
});
