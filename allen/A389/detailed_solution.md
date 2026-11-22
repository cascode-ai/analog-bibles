# Detailed solution - A389

The single dominant pole is set by the output resistance and the load. To decide between linear response and slewing, compare the largest slope the linear response would demand with the slew rate the folded cascode can deliver; then evaluate the delay with the applicable model.

### Step 1 — Dominant pole

With all other poles far away, the output node alone sets the response:

$$
p_1=-\frac1{R_{out}C_L}=-\frac1{(7.44\ \mathrm{M\Omega})(5\ \mathrm{pF})}=-\frac1{37.2\ \mu\mathrm s}=-2.69\times10^4\ \mathrm{rad/s},
\qquad f_1=\frac{|p_1|}{2\pi}=4.28\ \mathrm{kHz}.
$$

### Step 2 — Available slew rate

In the folded cascode the n-channel pair's drain currents are subtracted from the p-channel folding sources $I_4=I_5=125\ \mu$A at the two folding nodes. A large differential input steers the whole tail current $I_3=100\ \mu$A to one side, so one cascode branch carries $125\ \mu\mathrm A$ and the other $125-100=25\ \mu$A. The cascode current-mirror load turns this imbalance into an output current of $I_3=100\ \mu$A in either direction:

$$
SR=\frac{I_3}{C_L}=\frac{100\ \mu\mathrm A}{5\ \mathrm{pF}}=20\ \mathrm{V/\mu s}.
$$

Even the most pessimistic reading, in which only the 25 µA of the starved branch drives the load, gives 5 V/µs.

### Step 3 — Linear or slewing for a 10-mV step

The linear single-pole response $v_{out}=A_v(0)V_{in}(1-e^{-t/\tau})$, $\tau=37.2\ \mu$s, has its largest slope at $t=0$:

$$
\left.\frac{dv_{out}}{dt}\right|_{\max}=A_v(0)V_{in}|p_1|=(3678)(10\ \mathrm{mV})(2.69\times10^4\ \mathrm{s^{-1}})=0.99\ \mathrm{V/\mu s}.
$$

Supplying this slope into 5 pF takes only $C_L(0.99\ \mathrm{V/\mu s})=4.9\ \mu$A, far below the 100 µA available (and below even 25 µA), so the response is linear.

### Step 4 — Propagation delay

The resolution is $V_{in}(\min)=1.5\ \mathrm V/3678=0.408$ mV, so the input is $k=10\ \mathrm{mV}/0.408\ \mathrm{mV}=24.5$ times the resolution. The output must move half its swing, 0.75 V, which is a fraction $1/(2k)$ of the unclipped final change $A_v(0)V_{in}=36.8$ V:

$$
1-e^{-t_p/\tau}=\frac1{2k}
\quad\Rightarrow\quad
t_p=\tau\ln\frac{2k}{2k-1}=(37.2\ \mu\mathrm s)\ln\frac{49.0}{48.0}=(37.2\ \mu\mathrm s)(0.0206)=0.77\ \mu\mathrm s .
$$

Because only the first 2 % of the exponential is used, the slope barely changes, and $t_p\approx0.75\ \mathrm V/(0.99\ \mathrm{V/\mu s})=0.76\ \mu$s confirms the result.
