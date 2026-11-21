# Detailed solution - G327

During slewing the input pair is fully switched, so the op amp delivers a fixed current $\pm I_{\text{TAIL}}$, independent of its input voltage. The inverting input is then no longer a virtual ground: it floats on the capacitor network. The slew rate is the tail current divided by the total capacitance the output must charge, including the feedback path through $C_I$ into the floating input node.

### Step 1 — Output current while slewing

As in any single-stage op amp with a mirror load, a large input steers all of $I_{\text{TAIL}}$ to one side of the pair. The output then sources or sinks $I_{\text{TAIL}}=0.2$ mA, directly or through the $M_3$–$M_4$ mirror.

### Step 2 — Capacitance seen by the output

The output node connects to:

- $C_L$ to ground;
- $C_I$ to the inverting input. While slewing, nothing holds that node fixed, so $C_I$ is in series with the capacitance from the inverting input to ground, $C_S+C_{ip}$. The other plate of $C_S$ and the noninverting input are both at ground.

The effective load is therefore
$$
C_{\text{eff}}=C_L+\frac{C_I\,(C_S+C_{ip})}{C_I+C_S+C_{ip}}
=1.5\ \mathrm{pF}+\frac{(4\ \mathrm{pF})(0.5\ \mathrm{pF})}{4.5\ \mathrm{pF}}=1.5\ \mathrm{pF}+0.444\ \mathrm{pF}=1.944\ \mathrm{pF}.
$$
The inverting input follows the output through the capacitive divider, moving by $C_I/(C_I+C_S+C_{ip})=0.89$ of each output step.

### Step 3 — Slew rate

$$
SR=\frac{I_{\text{TAIL}}}{C_{\text{eff}}}=\frac{0.2\ \mathrm{mA}}{1.944\ \mathrm{pF}}=1.03\times10^8\ \mathrm{V/s}=103\ \mathrm{V/\mu s}.
$$
This is lower than $I_{\text{TAIL}}/C_L=133$ V/μs, because the feedback network adds 0.44 pF of load. It is much higher than $I_{\text{TAIL}}/(C_L+C_I)=36$ V/μs, which would wrongly assume that the inverting input stays at virtual ground while slewing.
