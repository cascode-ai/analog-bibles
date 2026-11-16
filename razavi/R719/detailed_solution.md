# Detailed solution - R719

**Approach.** First find the mutual inductance $M$ between the two bond wires, using image theory for long wires above a perfect ground plane. Then apply Faraday's law for coupled inductors, $v_2 = M\,di_1/dt$, to the 100-MHz sinusoidal current in wire 1.

### Step 1 — Mutual inductance per unit length (image theory)

Put the ground plane at $y = 0$, wire 1 at $(0, h)$ and wire 2 at $(d, h)$, with $h = 5$ mm and $d = 1$ mm. The current $I$ in wire 1 returns through the plane; above the plane its field equals that of wire 1 plus an **image** wire carrying $-I$ at $(0, -h)$.

Wire 2's circuit is the loop between wire 2 and the plane. Using the two-dimensional vector potential of a line current, $A_z = -(\mu_0I/2\pi)\ln r + \text{const}$, and noting that $A_z = 0$ on the plane (equidistant from wire 1 and its image), the flux per unit length linking wire 2's circuit is

$$\Phi' = \frac{\mu_0I}{2\pi}\ln\frac{r'}{r}, \qquad r = d,\quad r' = \sqrt{d^2 + (2h)^2},$$

where $r$ is the distance from wire 2 to wire 1 and $r'$ the distance to the image. Hence

$$M' = \frac{\Phi'}{I} = \frac{\mu_0}{2\pi}\ln\frac{\sqrt{d^2 + 4h^2}}{d} = \frac{\mu_0}{4\pi}\ln\left[1 + \left(\frac{2h}{d}\right)^2\right].$$

With $\mu_0/4\pi = 0.1$ nH/mm and $2h/d = 10$:

$$M' = (0.1\ \mathrm{nH/mm})\ln(1 + 100) = (0.1\ \mathrm{nH/mm})(4.615) = 0.4615\ \mathrm{nH/mm}.$$

### Step 2 — Total mutual inductance

Neglecting end effects, over the length $\ell = 4$ mm:

$$M = M'\ell = (0.4615\ \mathrm{nH/mm})(4\ \mathrm{mm}) = 1.85\ \mathrm{nH}.$$

### Step 3 — Induced voltage (Faraday's law)

For two magnetically coupled conductors, the voltage induced in conductor 2 by a changing current in conductor 1 is

$$v_2(t) = M\frac{di_1}{dt}.$$

The current in wire 1 is

$$i_1(t) = I_p\sin\omega t, \qquad I_p = 1\ \mathrm{mA},\quad \omega = 2\pi f = 2\pi(100\ \mathrm{MHz}).$$

Differentiate:

$$\frac{di_1}{dt} = \omega I_p\cos\omega t .$$

So

$$v_2(t) = \omega MI_p\cos\omega t,$$

a sinusoid at the same frequency, shifted by 90° with respect to the current (it peaks when the current crosses zero, where it changes fastest).

### Step 4 — Numbers

**Angular frequency:**

$$\omega = 2\pi\times10^{8}\ \mathrm{s^{-1}} = 6.283\times10^{8}\ \mathrm{rad/s}.$$

**Peak induced voltage:**

$$|v_2|_{peak} = \omega MI_p = (6.283\times10^{8}\ \mathrm{s^{-1}})(1.85\times10^{-9}\ \mathrm{H})(1\times10^{-3}\ \mathrm{A}).$$

Step by step: $(6.283\times10^{8})(1.846\times10^{-9}) = 1.160\ \Omega$ (the "mutual reactance" $\omega M$), and then

$$|v_2|_{peak} = (1.160\ \Omega)(1\ \mathrm{mA}) = 1.16\ \mathrm{mV},$$

i.e. **2.32 mV peak-to-peak**.

**Perspective.** A mere 1 mA at 100 MHz induces over a millivolt in the neighbouring wire. Digital and clock currents are usually much larger and contain faster edges (higher effective $\omega$), so crosstalk between adjacent bond wires can easily reach tens of millivolts; this is why sensitive analog pins are separated from noisy ones or flanked by ground wires.

### Result

$$M = 0.1\ln\left[1 + \left(\tfrac{2h}{d}\right)^2\right]\ \mathrm{nH/mm}\times4\ \mathrm{mm} \approx 1.85\ \mathrm{nH},$$

$$v_2(t) = \omega MI_p\cos\omega t, \qquad |v_2|_{peak} = 2\pi(10^8)(1.85\times10^{-9})(10^{-3}) \approx 1.16\ \mathrm{mV}\ (2.3\ \mathrm{mV\ pp}),$$

a 100-MHz sinusoid in quadrature with the current.

**Common mistake.** Using $f$ instead of $\omega = 2\pi f$, which gives $fMI_p \approx 0.18$ mV, about six times too small. The derivative of $\sin(2\pi ft)$ brings down a factor $2\pi f$.

**Common mistake.** Computing $M\cdot I$ (a flux, in webers) and calling it a voltage. The induced voltage is proportional to the *rate of change* of the current, $M\,di/dt$.

**Common mistake.** Using the self-inductance of the wire (about 1 nH/mm) instead of the mutual inductance, or ignoring the ground plane; the coupling is set by $M$, which depends on both the spacing $d$ and the height $h$ through the image currents.
