# Detailed solution - A404

The input pair injects a current proportional to $\Delta V_{in}$ into the output nodes, while the cross-coupled loads M3–M4 regenerate the output difference. One KCL equation on the antisymmetric half circuit gives a first-order equation with a right-half-plane pole; solving it for a step input from zero initial difference gives the time response and the delay.

### Step 1 — Differential KCL

By symmetry the tail node is an ac ground and $v_{o1}=-\Delta V_{out}/2$, $v_{o2}=+\Delta V_{out}/2$, $v_{gs1}=\Delta V_{in}/2$. At $v_{o1}$, current leaves through $C_1$ and into the drain of M1 ($g_{m1}\Delta V_{in}/2$), and M3, whose gate is at $v_{o2}$, sources $-g_{m3}v_{o2}$. With output conductances neglected:

$$
sC\,v_{o1}+g_{m1}\frac{\Delta V_{in}}2=-g_{m3}v_{o2}
\quad\Rightarrow\quad
sC\,\Delta V_{out}=g_{m3}\Delta V_{out}+g_{m1}\Delta V_{in},
$$

$$
\Delta V_{out}(s)=\frac{g_{m1}}{sC-g_{m3}}\,\Delta V_{in}(s).
$$

The pole at $s=+g_{m3}/C$ lies in the right half-plane: the cross-coupled pair regenerates.

### Step 2 — Step response

For a step $\Delta V_{in}(s)=\Delta V_{in}/s$ with the capacitors initially discharged, partial fractions give

$$
\Delta V_{out}(s)=\frac{g_{m1}}{g_{m3}}\Delta V_{in}\left[\frac1{s-g_{m3}/C}-\frac1s\right]
\quad\Rightarrow\quad
\Delta V_{out}(t)=\frac{g_{m1}}{g_{m3}}\Delta V_{in}\left(e^{t/\tau_L}-1\right),\qquad \tau_L=\frac C{g_{m3}} .
$$

At small $t$ this reduces to $\Delta V_{out}\approx(g_{m1}\Delta V_{in}/C)\,t$, the input current charging $C$; once $t$ exceeds $\tau_L$, the exponential regeneration takes over.

### Step 3 — Numerical values

$$
\tau_L=\frac{1\ \mathrm{pF}}{100\ \mu\mathrm S}=10\ \mathrm{ns},\qquad \frac{g_{m1}}{g_{m3}}=\frac{1\ \mathrm{mS}}{100\ \mu\mathrm S}=10 .
$$

### Step 4 — Propagation delay

Set $\Delta V_{out}=0.5(V_{OH}-V_{OL})$ with $\Delta V_{in}=0.01(V_{OH}-V_{OL})$:

$$
10\,(0.01)(V_{OH}-V_{OL})\left(e^{t_p/\tau_L}-1\right)=0.5(V_{OH}-V_{OL})
\quad\Rightarrow\quad
e^{t_p/\tau_L}=6,
$$
$$
t_p=\tau_L\ln6=(10\ \mathrm{ns})(1.792)=17.9\ \mathrm{ns}.
$$

The $-1$ term matters here: because the output starts from zero, the input must first build up the imbalance, and dropping the $-1$ would give $\tau_L\ln5=16.1$ ns.
