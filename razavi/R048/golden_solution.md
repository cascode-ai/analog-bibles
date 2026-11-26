# Golden Solution - R048

## Reference answer

The gate and drain are tied to $V_{DD}$, and the source supplies $I_2$ to the load. Since $V_{DS}=V_{GS}=V_{DD}-V_{out}$, the NMOS is saturated whenever it conducts.

As $V_{out}$ rises, $V_{GS}$ falls by the same amount. With the bulk assumed grounded, body effect also raises $V_{TH}$. The saturation current therefore varies strongly with output voltage:

$$I_2=\tfrac12\mu_nC_{ox}(W/L)(V_{DD}-V_{out}-V_{TH})^2.$$

The output impedance is $[1/(g_m+g_{mb})]\parallel r_O$, typically close to $1/(g_m+g_{mb})$ and much smaller than $r_O$. A conventional single-NMOS current source fixes $V_{GS}$ and takes its output at the drain.

## Grading notes

- +2: Identify the diode connection, show that the output sets $V_{GS}$ and hence the square-law current, and give a low output impedance of order $1/g_m$. Including $g_{mb}$ is a plus.
- +1: Give the correct reason with the impedance or current expression omitted.
- 0: Give only a vague explanation.
- −2 (asserted as fact): Claim the circuit works as a current source, attribute the failure to triode operation, or give $r_O$ as the output impedance.
