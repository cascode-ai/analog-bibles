# Detailed solution - R280

**Approach.** In deep triode, $V_{DS} \ll V_T$, so expanding $1 - \exp(-V_{DS}/V_T)$ to first order makes $I_D$ proportional to $V_{DS}$: the device behaves like a linear resistor with $R_{on} = V_{DS}/I_D$.

### Step 1 — Linearize for $V_{DS} \ll V_T$

Name the gate-dependent part

$$I_0 \equiv \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right),$$

the current the device would carry in subthreshold saturation ($V_{DS} \gg V_T$) at the same $V_{GS}$, so $I_D = I_0\left[1 - \exp(-V_{DS}/V_T)\right]$. With $\epsilon = V_{DS}/V_T \ll 1$ and $\exp(-\epsilon) \approx 1 - \epsilon$,

$$1 - \exp\!\left(-\frac{V_{DS}}{V_T}\right) \approx 1 - \left(1 - \frac{V_{DS}}{V_T}\right) = \frac{V_{DS}}{V_T},$$

$$
\begin{aligned}
I_D &\approx \mu C_d\frac{W}{L}V_T^2\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)\cdot\frac{V_{DS}}{V_T}\\
&= \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)V_{DS}.
\end{aligned}
$$

One factor of $V_T$ has cancelled, and the current is **directly proportional to $V_{DS}$**: for a fixed $V_{GS}$ the channel acts as a linear resistor.

### Step 2 — The on-resistance

$$R_{on} = \frac{V_{DS}}{I_D} = \frac{V_{DS}}{\mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)V_{DS}} ,$$

so, with $V_{DS}$ cancelling,

$$R_{on} = \frac{1}{\mu C_d\dfrac{W}{L}V_T\exp\!\left(\dfrac{V_{GS} - V_{TH}}{V_T}\right)} = \frac{V_T}{I_0},$$

the thermal voltage divided by the subthreshold saturation current at the same $V_{GS}$.

**Check.** Differentiating the exact expression gives $\partial I_D/\partial V_{DS} = (I_0/V_T)\exp(-V_{DS}/V_T)$, which at $V_{DS} = 0$ equals $I_0/V_T$: the same $R_{on} = V_T/I_0$ ✓.

### Step 3 — How $R_{on}$ depends on $V_{GS}$

$$R_{on} \propto \exp\!\left(-\frac{V_{GS} - V_{TH}}{V_T}\right):$$

raising $V_{GS}$ by $V_T$ (≈ 26 mV) divides $R_{on}$ by $e \approx 2.7$, and by $V_T\ln10 \approx 60$ mV divides it by 10. In strong inversion, by contrast, $R_{on} = 1/[\mu C_{ox}(W/L)(V_{GS} - V_{TH})]$ depends only inversely, and linearly, on the overdrive.

### Step 4 — A numerical illustration

Suppose that at some $V_{GS}$ the subthreshold saturation current is $I_0 = 100$ nA, and $V_T = 26$ mV:

$$R_{on} = \frac{V_T}{I_0} = \frac{26\ \mathrm{mV}}{100\ \mathrm{nA}} = 260\ \mathrm{k}\Omega .$$

Raising $V_{GS}$ by 60 mV makes $I_0 = 1\ \mu\mathrm{A}$ and $R_{on} = 26\ \mathrm{k}\Omega$.

**Accuracy of the linearization.** At $V_{DS} = V_T/10$, the exact factor is $1 - e^{-0.1} = 0.0952$ against the approximation 0.1, a 5 % difference. So "deep triode" here means $V_{DS}$ of only a few millivolts, much smaller than in strong inversion, where the triode region extends up to $V_{GS} - V_{TH}$.

### Result

With $V_{DS} \ll V_T$, $1 - \exp(-V_{DS}/V_T) \approx V_{DS}/V_T$, so $I_D \approx \mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)V_{DS}$, which is linear in $V_{DS}$, and

$$R_{on} = \frac{1}{\mu C_d\frac{W}{L}V_T\exp\!\left(\frac{V_{GS} - V_{TH}}{V_T}\right)} = \frac{V_T}{I_{D,sat}},$$

where $I_{D,sat}$ is the subthreshold saturation current at the same $V_{GS}$. $R_{on}$ falls exponentially, by a factor $e$ per $V_T$, as $V_{GS}$ rises.

**Common mistake.** Writing $R_{on} \propto \exp[(V_{GS} - V_{TH})/V_T]$. A larger gate voltage gives *more* current at the same $V_{DS}$, hence a *smaller* resistance: the exponential belongs in the denominator.

**Common mistake.** Keeping the wrong power of $V_T$. The prefactor has $V_T^2$, but the linearization contributes $V_{DS}/V_T$, so only one $V_T$ remains in $R_{on}$; $V_T^2$ (or none) gives the wrong units.

**Common mistake.** Applying the strong-inversion result $1/[\mu C_{ox}(W/L)(V_{GS} - V_{TH})]$. In subthreshold $V_{GS} - V_{TH} < 0$, so that formula would even give a negative resistance.
