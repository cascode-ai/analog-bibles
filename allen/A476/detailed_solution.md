# Detailed solution - A476

Each stage is a capacitive-feedback amplifier around a single-pole op amp, so it settles exponentially with a time constant set by its feedback factor. Find the two feedback factors and time constants, decide how far each stage must settle for 7-bit accuracy, and add the two settling times to get the clock period.

### Step 1 — Op-amp model

$$
A_v(s)=\frac{A_0}{1+s/\omega_a},\qquad A_0=10^4,\quad \omega_a=2\pi(100\ \mathrm{Hz})=628.3\ \mathrm{rad/s},
$$

so $GB=A_0\omega_a=6.283\times10^6$ rad/s ($1$ MHz). With feedback factor $\beta$, the closed-loop pole is $\omega_H=\omega_a(1+A_0\beta)\approx\beta\,GB$ and a step settles as $1-e^{-t/\tau}$ with $\tau=1/\omega_H$.

### Step 2 — Feedback factors and time constants

During φ2 every array capacitor connects the summing node to a low-impedance node ($V_{REF}$, ground or the A1 output), so all of them load the feedback divider.

- A1: input capacitance $C+C/2+C/4+C/8=15C/8$, feedback $2C$:
$$
\beta_1=\frac{2C}{2C+15C/8}=\frac{16}{31}=0.516,\qquad
\omega_{H1}=628.3\left(1+10^4\cdot\tfrac{16}{31}\right)=3.244\times10^6\ \mathrm{rad/s},\qquad \tau_1=0.308\ \mu\mathrm s .
$$
- A2: MSB array $15C/8$ plus the coupling capacitor $C/8$, i.e. $2C$, with feedback $2C$:
$$
\beta_2=\frac{2C}{2C+2C}=0.5,\qquad
\omega_{H2}=628.3\left(1+10^4\cdot0.5\right)=3.142\times10^6\ \mathrm{rad/s},\qquad \tau_2=0.318\ \mu\mathrm s .
$$

### Step 3 — Settling requirement for ENOB = 7

An ENOB of 7 bits requires the error to stay below ½ LSB of a 7-bit converter, $2^{-8}=1/256$ of full scale. Taking the worst case, each stage must settle to this accuracy:

$$
e^{-t/\tau}\le\frac1{256}\quad\Longrightarrow\quad t=\tau\ln256=5.545\,\tau .
$$

$$
t_1=5.545(0.308\ \mu\mathrm s)=1.71\ \mu\mathrm s,\qquad
t_2=5.545(0.318\ \mu\mathrm s)=1.76\ \mu\mathrm s .
$$

### Step 4 — Clock frequency

The two responses add to one clock period:

$$
T=t_1+t_2=3.47\ \mu\mathrm s,\qquad f_{clock}=\frac1T=288\ \mathrm{kHz}.
$$

The finite dc gain also leaves a static error $1/(1+A_0\beta)\approx2\times10^{-4}$ per stage, far below $1/256$. Subtracting it from each stage's budget (dynamic error $\le1/256-2\times10^{-4}\approx0.0037$, i.e. $5.60\tau$) gives $T\approx3.51\ \mu$s and $f_{clock}\approx285$ kHz. The clock frequency at which the ENOB falls to 7 bits is therefore about 285–288 kHz; settling, not the dc gain, sets the limit.
