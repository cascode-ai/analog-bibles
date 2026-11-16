# Detailed solution - R280

**Approach.** In the deep triode region the drain–source voltage is much smaller than the thermal voltage $V_T$. Expanding the factor $1 - \exp(-V_{DS}/V_T)$ to first order makes $I_D$ proportional to $V_{DS}$, i.e. the device behaves like a linear resistor. Its on-resistance is $R_{on} = V_{DS}/I_D$.

### Step 1 — The model and its symbols

The subthreshold drain current is

$$I_D = \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)\left[1 - \exp\!\left(\frac{-V_{DS}}{V_T}\right)\right].$$

- $\mu$ is the carrier mobility, $C_d$ the depletion capacitance per unit area, and $W/L$ the aspect ratio.
- $V_T = kT/q$ is the thermal voltage (about 26 mV at room temperature). Do not confuse it with the threshold voltage $V_{TH}$.
- The exponential in $V_{GS}$ is the subthreshold "diode-like" dependence: the current changes by a factor $e$ for every $V_T$ of gate–source voltage.
- The bracket describes the dependence on $V_{DS}$. For $V_{DS} \gg V_T$ it tends to 1 (the subthreshold "saturation" region, reached after a few $V_T$). For small $V_{DS}$ it goes to zero, which is the triode region.

It is convenient to name the gate-dependent part. Let

$$I_0 \equiv \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right),$$

which is the current the device would carry in subthreshold saturation at the same $V_{GS}$. Then $I_D = I_0\left[1 - \exp(-V_{DS}/V_T)\right]$.

### Step 2 — Linearize for $V_{DS} \ll V_T$

Let $\epsilon = V_{DS}/V_T$. Deep triode means $\epsilon \ll 1$, so we use the first-order Taylor expansion

$$\exp(-\epsilon) \approx 1 - \epsilon .$$

Then

$$1 - \exp\!\left(-\frac{V_{DS}}{V_T}\right) \approx 1 - \left(1 - \frac{V_{DS}}{V_T}\right) = \frac{V_{DS}}{V_T}.$$

Substitute into the current:

$$
\begin{aligned}
I_D &\approx \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)\cdot\frac{V_{DS}}{V_T}\\
&= \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)V_{DS}.
\end{aligned}
$$

One factor of $V_T$ has cancelled. The current is now **directly proportional to $V_{DS}$**, which is Ohm's law: for a fixed $V_{GS}$ the channel acts as a linear resistor.

### Step 3 — The on-resistance

The resistance is the ratio of voltage to current:

$$R_{on} = \frac{V_{DS}}{I_D} = \frac{V_{DS}}{\mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)V_{DS}} .$$

$V_{DS}$ cancels, so

$$R_{on} = \frac{1}{\mu C_d\dfrac{W}{L}V_T\exp\!\left(\dfrac{V_{GS} - V_{TH}}{V_T}\right)} .$$

**Equivalent form.** Since $I_0 = \mu C_d(W/L)V_T^2\exp[(V_{GS} - V_{TH})/V_T]$,

$$R_{on} = \frac{V_T}{I_0},$$

i.e. the thermal voltage divided by the subthreshold saturation current at the same $V_{GS}$.

**Check with the small-signal definition.** The incremental resistance is $(\partial I_D/\partial V_{DS})^{-1}$. Differentiating the exact expression gives $\partial I_D/\partial V_{DS} = (I_0/V_T)\exp(-V_{DS}/V_T)$, which at $V_{DS} = 0$ equals $I_0/V_T$. That is the same $R_{on} = V_T/I_0$. ✓

### Step 4 — How $R_{on}$ depends on $V_{GS}$

The gate voltage enters only through the exponential in the denominator:

$$R_{on} \propto \exp\!\left(-\frac{V_{GS} - V_{TH}}{V_T}\right).$$

- Raising $V_{GS}$ by $V_T$ (≈ 26 mV) divides $R_{on}$ by $e \approx 2.7$.
- Raising $V_{GS}$ by $V_T\ln10 \approx 60$ mV divides $R_{on}$ by 10.

Compare this with strong inversion, where $R_{on} = 1/[\mu C_{ox}(W/L)(V_{GS} - V_{TH})]$ depends only inversely, and linearly, on the overdrive. In subthreshold the resistance is very large and changes exponentially with the gate voltage.

### Step 5 — A numerical illustration

Suppose that at some $V_{GS}$ the device's subthreshold saturation current is $I_0 = 100$ nA, and $V_T = 26$ mV:

$$R_{on} = \frac{V_T}{I_0} = \frac{26\ \mathrm{mV}}{100\ \mathrm{nA}} = 260\ \mathrm{k}\Omega .$$

Raising $V_{GS}$ by 60 mV makes $I_0 = 1\ \mu\mathrm{A}$ and $R_{on} = 26\ \mathrm{k}\Omega$.

**Accuracy of the linearization.** At $V_{DS} = V_T/10$, the exact factor is $1 - e^{-0.1} = 0.0952$ against the approximation 0.1, a 5 % difference. So "deep triode" here means $V_{DS}$ of only a few millivolts, much smaller than in strong inversion, where the triode region extends up to $V_{GS} - V_{TH}$.

### Result

With $V_{DS} \ll V_T$, $1 - \exp(-V_{DS}/V_T) \approx V_{DS}/V_T$, so $I_D \approx \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)V_{DS}$, which is linear in $V_{DS}$, and

$$R_{on} = \frac{1}{\mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)} = \frac{V_T}{I_{D,sat}},$$

where $I_{D,sat}$ is the subthreshold saturation current at the same $V_{GS}$. $R_{on}$ falls exponentially, by a factor $e$ per $V_T$, as $V_{GS}$ rises.

**Common mistake.** Inverting the exponential and writing $R_{on} \propto \exp[(V_{GS} - V_{TH})/V_T]$. A larger gate voltage gives *more* current at the same $V_{DS}$, hence a *smaller* resistance: the exponential belongs in the denominator.

**Common mistake.** Keeping the wrong power of $V_T$. The prefactor has $V_T^2$, but the linearization contributes $V_{DS}/V_T$, so only one $V_T$ remains in $R_{on}$. Leaving $V_T^2$ (or none) gives a result with the wrong units.

**Common mistake.** Applying the strong-inversion result $1/[\mu C_{ox}(W/L)(V_{GS} - V_{TH})]$. In subthreshold $V_{GS} - V_{TH} < 0$, so that formula would even give a negative resistance. The subthreshold current law must be used.
