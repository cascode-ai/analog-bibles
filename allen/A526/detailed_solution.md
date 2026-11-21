# Detailed solution - A526

In a flash converter the conversion rate is limited by the slowest comparator decision, which occurs for the smallest overdrive. Take the worst-case overdrive, use the comparator's single-pole step response to find the time to reach half of the 1-V output, and check that the slew rate is not the limit.

### Step 1 — Worst-case overdrive

For a 6-bit converter with $V_{REF}=5$ V,

$$
1\ \text{LSB}=\frac{V_{REF}}{2^6}=\frac{5\ \mathrm V}{64}=78.1\ \mathrm{mV}.
$$

The taps lie at the code transitions, and the converter must resolve an input as close as half an LSB to a tap (an input at the middle of a code, midway between adjacent taps). The smallest overdrive a comparator must handle is therefore

$$
|V^*_{in}-V_i|=\tfrac12\ \text{LSB}=\frac{5\ \mathrm V}{128}=39.1\ \mathrm{mV}.
$$

### Step 2 — Linear single-pole response

With dc gain $A_0=10^4$ and dominant pole $\omega_p=10^3$ rad/s, the comparator output starting from its initial state 0 V is

$$
v_{out}(t)=A_0\left(1-e^{-\omega_pt}\right)(V^*_{in}-V_i)
=(10^4)(0.0391\ \mathrm V)\left(1-e^{-10^3t}\right)=390.6\ \mathrm V\left(1-e^{-10^3t}\right),
$$

until it clips at 1 V. The conversion time $T$ is the time to reach halfway, 0.5 V:

$$
1-e^{-10^3T}=\frac{0.5\ \mathrm V}{390.6\ \mathrm V}=0.00128
\;\Longrightarrow\;
T=-\frac{\ln(1-0.00128)}{10^3\ \mathrm{s^{-1}}}=1.281\ \mu\mathrm s .
$$

Since $0.00128\ll1$, the output rises essentially linearly, $v_{out}\approx A_0\omega_p(V^*_{in}-V_i)\,t$, the gain–bandwidth product times the overdrive.

### Step 3 — Slew-rate check

The steepest slope of the linear response is at $t=0$:

$$
\left.\frac{dv_{out}}{dt}\right|_{max}=A_0\omega_p(V^*_{in}-V_i)=(10^7\ \mathrm{s^{-1}})(0.0391\ \mathrm V)=3.9\times10^5\ \mathrm{V/s}=0.39\ \mathrm{V/\mu s},
$$

well below the 3-V/µs slew rate, so the response is not slew limited.

### Step 4 — Maximum conversion rate

$$
f_{max}=\frac1T=\frac1{1.281\ \mu\mathrm s}\approx0.78\times10^6\ \text{samples/s}.
$$

With a 1-LSB overdrive instead, the time would halve to about 0.64 µs (1.56 MS/s); the half-LSB case is the worst case and sets the maximum rate.
