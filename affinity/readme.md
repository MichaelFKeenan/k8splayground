- only considered duriong scheduling, doesn;t move pods around on the fly when more appropriate things become available for example

- node affinity and pod affinity

** node affinity 
    -- 2 types:
    - required during scheduling/ignored during execution
    - preferred during scheduling/ignored during execution
        - these can be weighted
    - can use both at same time, not mutually exclusive

    -- SCENARIO 1
    - I created a node called 'minikube-m02' and 03
    - I label minikube-m02 as dev (minikube kubectl label nodes minikube-m02 env=dev)
    - I add affinity for nodes with that env to the deployment spec
    - these pods are all added to that minikube-m02 because it's the only node that meets the requirement

    
    -- SCENARIO 2
    - I created a node called 'minikube-m02' and 03
    - I label minikube-m02 AND m03 as dev (minikube kubectl label nodes minikube-m02 env=dev)
    - I also label minikube-m03 as team=engineering-project1
    - I add affinity for nodes with that env to the deployment spec with weight 1
    - I add affinity for team=engineering-project1 with weight 3
    - m02 gets a score of 1, m03 gets 4, because of what each one matches in the rules, so the pods go on m03 (highest score)

** pod affinity
    -- 2 types: required and preferred (preferred can again be weighted)
    -- same as node affinity, but pod level instead
    - essentially, instead of specifying which node you want to use, you declare a pod you want to match ANY particular node label for
     - so you could say 'put pod B' on ANY node with the same 'availability zone' label as 'pod A'
      - therefore, it doesn't NECESSARILY have to be on the same node, but it DOES have to be a node that shares the given property/label/TOPOLOGYKEY with the specified pod
    -- anti-affinity is exactly the same but reversed (makes sure it's not on matching node)

    -- see examples, pod1 is created, pod 2 is created with affinity to pod1's node host name, then scaled up 4 times to be sure, then pod 3 is created with ANTI affinity to pod 1's host name. 1 and 2 end up on 02, 3 ends up on 03