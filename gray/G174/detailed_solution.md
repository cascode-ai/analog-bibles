# Detailed solution - G174

$Q_{70}$, $R_{70}$ and $Q_{71}$ form a current-sensing limit for the sinking output device $Q_{75}$. $Q_{71}$ samples a scaled copy of $I_{C75}$; when its collector current drops enough voltage across $R_{70}$, $Q_{70}$ turns on and robs the current that drives $Q_{75}$. Find $I_{C71}$ at that turn-on point, then translate it into $I_{C75}$ through the exponential $I_C$–$V_{BE}$ law.

### Step 1 — How the limit works

$Q_{70}$ has its base and collector both connected to the collector of $Q_{71}$ (the bottom of $R_{70}$), so it behaves as a diode from node 18 to that node. In normal operation node 18 is the emitter of $Q_{18}$, which sources $|I_{C18}|=21\ \mu$A into node 26 and thereby drives $Q_{68}$ and the base node of $Q_{71}$, $Q_{75}$. As $I_{C75}$ rises, $I_{C71}$ rises with it, pulling the collector of $Q_{71}$ down. When $V_{18}-V_{C71}$ reaches $V_{EB70(on)}$, $Q_{70}$ conducts and draws current out of node 18. That lowers $V_{18}$ and reduces $|I_{C18}|$, the current pulling node 26 up, so $I_{C75}$ cannot grow further.

### Step 2 — $I_{C71}$ at the onset of limiting

With $|I_{C18}|=21\ \mu$A flowing in $R_{18}$, node 18 is below $V_{CC}$ by

$$
V_{CC}-V_{18}=|I_{C18}|R_{18}=(21\ \mu\mathrm A)(9.3\ \mathrm{k\Omega})=0.195\ \mathrm V,
$$

and with base currents ignored the collector of $Q_{71}$ is at $V_{C71}=V_{CC}-I_{C71}R_{70}$. $Q_{70}$ turns on when

$$
V_{18}-V_{C71}=I_{C71}R_{70}-0.195\ \mathrm V=V_{EB70(on)}=0.7\ \mathrm V
\;\Rightarrow\;
I_{C71}=\frac{0.895\ \mathrm V}{1.6\ \mathrm{k\Omega}}=0.560\ \mathrm{mA}.
$$

### Step 3 — Relating $I_{C75}$ to $I_{C71}$

$Q_{71}$ and $Q_{75}$ share the base node, with $R_{71}$ in the emitter of $Q_{71}$ and the emitter of $Q_{75}$ grounded. KVL around the two base-emitter loops gives

$$
V_{BE75}=V_{BE71}+I_{C71}R_{71}.
$$

With $I_C=I_Se^{V_{BE}/V_T}$ for each device,

$$
I_{C75}=\frac{I_{S75}}{I_{S71}}\,I_{C71}\exp\!\left(\frac{I_{C71}R_{71}}{V_T}\right).
$$

Substituting $I_{S75}/I_{S71}=10$ and $I_{C71}R_{71}=(0.560\ \mathrm{mA})(50\ \Omega)=28.0$ mV:

$$
I_{C75}=10\,(0.560\ \mathrm{mA})\,e^{28.0\ \mathrm{mV}/26\ \mathrm{mV}}=(5.60\ \mathrm{mA})(2.93)=16.4\ \mathrm{mA}.
$$

As a check, $V_{BE71}=V_T\ln(I_{C71}/I_{S71})=(26\ \mathrm{mV})\ln\bigl(0.560\ \mathrm{mA}/6\times10^{-18}\ \mathrm A\bigr)=0.836$ V, so $V_{BE75}=0.864$ V and $I_{C75}=I_{S75}e^{V_{BE75}/V_T}=16.4$ mA.

### Step 4 — Maximum sinking current

$$
I_{C75(\max)}\approx16\ \mathrm{mA}.
$$

Both refinements matter: without the 0.195-V drop on $R_{18}$ the result would be only about 10 mA, and without the degeneration factor $e^{I_{C71}R_{71}/V_T}\approx2.9$ it would be about 5.6 mA. The limit is comparable to the source-side limit of the output stage and comfortably covers a 10-mA load.
