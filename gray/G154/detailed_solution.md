# Detailed solution - G154

Compute each output separately: the switched-capacitor circuit by charge conservation per clock period, the continuous-time circuit by integrating the resistor current onto $C_I$. Then compare rate, shape and sign. The equivalence $R=1/(fC_S)$ comes from the average current a switched capacitor carries: it moves charge $C_SV_s$ once per period, i.e. an average current $fC_SV_s=V_s/R$.

### Step 1 — Continuous-time RC integrator [Fig. 2]

$$
R=\frac{1}{fC_S}=\frac{1}{(10^6\ \mathrm{s^{-1}})(10^{-12}\ \mathrm F)}=1\ \mathrm{M\Omega},\qquad \tau=RC_I=(1\ \mathrm{M\Omega})(5\ \mathrm{pF})=5\ \mu\mathrm s.
$$

The inverting input is a virtual ground, so the current $V_s/R$ flows through $R$ and on into $C_I$, charging it in the direction that drives $V_o$ negative:

$$
V_o(t)=-\frac{1}{RC_I}\int_0^tV_s\,dt'=-\frac{V_s}{\tau}t=-(0.2\ \mathrm{V/\mu s})\,t .
$$

This is a smooth linear ramp reaching $-4.0$ V at $t=20\ \mu$s.

### Step 2 — Switched-capacitor integrator [Fig. 1]

During $\phi_1$, $C_S$ is charged with its bottom plate at $V_s$ and its top plate grounded; during $\phi_2$ the bottom plate is grounded and the top plate is connected to the summing node, transferring the charge to $C_I$. Charge conservation at the summing node gives

$$
V_o[n+1]=V_o[n]+\frac{C_S}{C_I}V_s[n]=V_o[n]+0.2\ \mathrm V .
$$

The output is a staircase of $+0.2$ V steps, one per 1 µs period, held constant between transfers, reaching about $+4.0$ V at 20 µs. It responds to the input sampled at the end of $\phi_1$, half a period before the step appears.

### Step 3 — Comparison

![Switched-capacitor staircase rising in 0.2 V steps to +4 V compared with the RC integrator ramp falling linearly to -4 V over 20 microseconds](/q/G154/solution-waveforms.svg)

| | RC integrator [Fig. 2] | Switched-capacitor integrator [Fig. 1] |
|---|---|---|
| Rate | 0.2 V/µs ($\tau=5\ \mu$s) | 0.2 V per period, i.e. 0.2 V/µs on average |
| Shape | smooth linear ramp | staircase of 0.2-V steps, flat between transfers |
| Sign | inverting, falls to $-4.0$ V | noninverting, rises to $+4.0$ V |
| Timing | follows the input continuously | samples once per period, half-period delay |

The magnitudes agree at the clock instants to within one 0.2-V step, as expected when the input changes slowly compared with the 1 MHz clock; both have the same time constant $C_I/(fC_S)=5\ \mu$s. The differences are the discrete steps with their sampling delay, and the opposite polarity, which comes from the switch phasing of [Fig. 1]: switching the bottom plate from $V_s$ to ground makes the transferred charge raise $V_o$. Exchanging the roles of the two plates (sampling $V_s$ on the plate that later connects to the summing node) would give an inverting integrator with the sign of the RC circuit.
