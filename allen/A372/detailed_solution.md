# Detailed solution - A372

Compute the delay twice: assuming a linear single-pole response, and assuming the output slews at the slew rate. Then check which regime applies by comparing the initial slope of the linear response with the slew rate; the comparator follows whichever is slower.

### Step 1 — Overdrive relative to the resolution

The input resolution is the input that produces the full output swing through the dc gain:

$$
V_{in}(\min)=\frac{V_{OH}-V_{OL}}{A_v(0)}=\frac{1\ \mathrm V}{10^4}=0.1\ \mathrm{mV},\qquad
k=\frac{V_{in}}{V_{in}(\min)}=\frac{10\ \mathrm{mV}}{0.1\ \mathrm{mV}}=100 .
$$

### Step 2 — Linear single-pole estimate

With a single pole at $\omega_c=10^5$ rad/s ($\tau_c=10\ \mu$s), a step $V_{in}$ gives $v_{out}(t)=A_v(0)V_{in}(1-e^{-t/\tau_c})$. The output moves by half its swing, $(V_{OH}-V_{OL})/2=A_v(0)V_{in}(\min)/2$, when

$$
1-e^{-t_p/\tau_c}=\frac1{2k}\quad\Rightarrow\quad
t_p=\tau_c\ln\frac{2k}{2k-1}=(10\ \mu\mathrm s)\ln\frac{200}{199}=50.1\ \mathrm{ns}.
$$

### Step 3 — Check for slewing

The linear response is steepest at $t=0$, where its slope is

$$
\frac{dv_{out}}{dt}\Big|_{0}=A_v(0)V_{in}\,\omega_c=(10^4)(10\ \mathrm{mV})(10^5\ \mathrm{s^{-1}})=10\ \mathrm{V/\mu s},
$$

ten times the available slew rate of 1 V/µs. The output therefore cannot follow the linear response; it slews.

### Step 4 — Slew-limited delay

Changing the output by half its swing at the slew rate takes

$$
t_p=\frac{V_{OH}-V_{OL}}{2\,SR}=\frac{1\ \mathrm V}{2(1\ \mathrm{V/\mu s})}=0.5\ \mu\mathrm s .
$$

This slew-limited value is the larger of the two and is the propagation delay: $t_p=0.5\ \mu$s (500 ns).
