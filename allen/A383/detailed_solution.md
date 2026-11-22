# Detailed solution - A383

First check whether the output slews or follows its linear single-pole response; then solve the linear step response for the time at which the output has covered half of its swing.

### Step 1 — Input overdrive relative to the resolution

The smallest input that drives the output through its full 1-V swing is

$$
V_{in}(\min)=\frac{V_{OH}-V_{OL}}{A_v(0)}=\frac{1\ \mathrm V}{10^4}=0.1\ \mathrm{mV},
\qquad k=\frac{V_{in}}{V_{in}(\min)}=\frac{1\ \mathrm{mV}}{0.1\ \mathrm{mV}}=10 .
$$

### Step 2 — Linear response or slewing

With a single pole at $\omega_c=10^5$ rad/s ($\tau_c=1/\omega_c=10\ \mu$s), the unclipped linear step response is

$$
v_{out}(t)=A_v(0)V_{in}\bigl(1-e^{-t/\tau_c}\bigr),
$$

whose slope is largest at $t=0$:

$$
\left.\frac{dv_{out}}{dt}\right|_{\max}=\frac{A_v(0)V_{in}}{\tau_c}=(10^4)(1\ \mathrm{mV})(10^5\ \mathrm{s^{-1}})=1\ \mathrm{V/\mu s}.
$$

This is below the 5-V/µs slew rate, so the comparator never slews and the linear response applies throughout.

### Step 3 — Propagation delay

The output must move half the swing, 0.5 V, out of an unclipped final change of $A_v(0)V_{in}=10$ V, i.e. a fraction $1/(2k)=0.05$:

$$
1-e^{-t_p/\tau_c}=\frac1{2k}
\quad\Rightarrow\quad
t_p=\tau_c\ln\frac{2k}{2k-1}=(10\ \mu\mathrm s)\ln\frac{20}{19}=(10\ \mu\mathrm s)(0.05129)=0.513\ \mu\mathrm s .
$$

Because the overdrive is ten times the resolution, only the initial, nearly linear part of the exponential is used, so $t_p\approx\tau_c/(2k)=0.5\ \mu$s. A slew-limited output would have needed $0.5\ \mathrm V/(5\ \mathrm{V/\mu s})=0.1\ \mu$s, but the comparator cannot reach that rate with this input.
