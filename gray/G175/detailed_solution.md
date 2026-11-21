# Detailed solution - G175

The high-gain loop through $Q_{39}$–$Q_{40}$ makes $V_{B40}=V_{B39}$. Write both base voltages, and the drop across $R_{43}$, as sums of base-emitter voltages using $|V_{BE}|=V_T\ln(|I_C|/I_S)$ (base currents ignored, so each collector current equals its emitter current). Because $R_{43}=R_{46}$ carry the same current, their drops cancel and the output currents appear only as a product.

### Step 1 — The sensing branch

$Q_{43}$, $R_{43}$, $R_{46}$ and $Q_{46}$ are in series between $V_{CC}$ and ground, so one current flows through all of them; call it $I=|I_{C43}|=|I_{E46}|$. The base of $Q_{40}$ is the node between the collector of $Q_{43}$ and $R_{46}$.

Pbase is the common base of $Q_{43}$ and $Q_{74}$, whose emitters are at $V_{CC}-IR_{43}$ and $V_{CC}$ respectively. Equating the two expressions for $V_{CC}-V_{\mathrm{Pbase}}$:

$$
V_{EB74}=IR_{43}+V_{EB43}
\;\Rightarrow\;
IR_{43}=V_T\ln\frac{|I_{C74}|}{I_{S74}}-V_T\ln\frac{I}{I_{S43}}
=V_T\ln\frac{|I_{C74}|\,I_{S43}}{I_{S74}\,I}.
$$

### Step 2 — Equal base voltages of the comparison pair

Nbase is the base of $Q_{75}$ (emitter grounded) and of $Q_{46}$. Climbing from ground through $Q_{75}$'s base-emitter junction, $Q_{46}$'s emitter-base junction and $R_{46}$:

$$
V_{B40}=V_{BE75}+V_{EB46}+IR_{46}.
$$

The base of $Q_{39}$ sits on the diode stack carrying $I_{REF}$: $V_{B39}=V_{BE37}+V_{EB38}$. Setting $V_{B40}=V_{B39}$ and expressing each junction voltage logarithmically:

$$
IR_{46}=V_T\ln\frac{I_{REF}^2}{I_{S37}I_{S38}}-V_T\ln\frac{I_{C75}\,I}{I_{S75}I_{S46}} .
$$

### Step 3 — Cancel the resistor drops

Since $R_{43}=R_{46}$ and both carry $I$, the left sides of Step 1 and Step 2 are equal, so the arguments of the logarithms match:

$$
\frac{|I_{C74}|\,I_{S43}}{I_{S74}\,I}=\frac{I_{REF}^2\,I_{S75}I_{S46}}{I_{S37}I_{S38}\,I_{C75}\,I}.
$$

$I$ cancels, and $I_{S46}=I_{S43}$ (identical devices), leaving

$$
|I_{C74}|\,I_{C75}=I_{REF}^2\,\frac{I_{S74}}{I_{S38}}\,\frac{I_{S75}}{I_{S37}} .
$$

The ratios compare devices of the same type: $I_{S74}/I_{S38}=32$ (pnp) and $I_{S75}/I_{S37}=10$ (npn).

### Step 4 — Numerical value

$$
|I_{C74}|\,I_{C75}=(7.4\ \mu\mathrm A)^2(32)(10)=(54.76\ \mu\mathrm A^2)(320)=1.75\times10^{-8}\ \mathrm{A^2}\;(17{,}500\ \mu\mathrm A^2).
$$

With no load the two output currents are equal, $|I_{C74}|=I_{C75}=\sqrt{1.75\times10^{-8}\ \mathrm{A^2}}\approx132\ \mu$A. This is a constant-product class-AB law: as the load current increases one output current, the other keeps decreasing in inverse proportion rather than being held at a fixed minimum.
