# Detailed solution - R073

**Approach.** The intrinsic gain $g_mr_O$ is the largest voltage gain a single transistor can provide (a common-source stage with an ideal current-source load). Compute $g_m$ from the square law and $r_O = 1/(\lambda|I_D|)$ for each device, scaling $\lambda$ with $1/L$ for the longer devices.

### Step 1 — Formulas

For a saturated square-law MOSFET:

- **Transconductance:**
$$g_m = \sqrt{2\mu C_{ox}\frac{W}{L}|I_D|},$$
with $\mu C_{ox} = \mu_nC_{ox}$ for the NMOS and $\mu_pC_{ox}$ for the PMOS.
- **Output resistance** from channel-length modulation:
$$r_O = \frac{1}{\lambda|I_D|},$$
where $\lambda$ is the channel-length modulation coefficient.
- **Scaling of $\lambda$:** $\lambda \propto 1/L$, with the given values valid at $L = 0.5\ \mu$m:
$$\lambda(L) = \lambda(0.5\ \mu\mathrm{m})\times\frac{0.5\ \mu\mathrm{m}}{L} .$$

The **intrinsic gain** is the product $g_mr_O$, the magnitude of the gain $-g_mr_O$ of a CS stage loaded only by its own $r_O$.

### Step 2 — $W/L = 50/0.5$: transconductances

Both devices have $W/L = 100$ and $|I_D| = 0.5$ mA.

**NMOS:**

$$g_{m,n} = \sqrt{2(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.$$

**PMOS:**

$$g_{m,p} = \sqrt{2(38.4\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{3.84\times10^{-6}}\ \mathrm{A/V} = 1.96\ \mathrm{mS}.$$

The PMOS has a lower $g_m$ because of its lower hole mobility: $g_{m,p}/g_{m,n} = \sqrt{38.4/134} = 0.535$.

### Step 3 — $W/L = 50/0.5$: output resistances and intrinsic gains

At $L = 0.5\ \mu$m the given $\lambda$ values apply directly.

**NMOS** ($\lambda_n = 0.1\ \mathrm{V^{-1}}$):

$$r_{O,n} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = 20\ \mathrm{k}\Omega, \qquad g_{m,n}r_{O,n} = (3.66\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 73.2 .$$

**PMOS** ($\lambda_p = 0.2\ \mathrm{V^{-1}}$):

$$r_{O,p} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = 10\ \mathrm{k}\Omega, \qquad g_{m,p}r_{O,p} = (1.96\ \mathrm{mS})(10\ \mathrm{k}\Omega) = 19.6 .$$

The PMOS is worse on both counts: lower $g_m$ and lower $r_O$ (larger $\lambda$).

### Step 4 — $W/L = 100/1$: what changes

**Transconductance.** $g_m$ depends on $W$ and $L$ only through the ratio $W/L$, which is again $100/1 = 100$. At the same current, $g_m$ is **unchanged**:

$$g_{m,n} = 3.66\ \mathrm{mS}, \qquad g_{m,p} = 1.96\ \mathrm{mS}.$$

**Channel-length modulation.** $L$ doubles from 0.5 µm to 1 µm, so $\lambda$ halves:

$$\lambda_n = 0.1\times\frac{0.5}{1}\ \mathrm{V^{-1}} = 0.05\ \mathrm{V^{-1}}, \qquad \lambda_p = 0.2\times\frac{0.5}{1}\ \mathrm{V^{-1}} = 0.1\ \mathrm{V^{-1}}.$$

**Output resistances** double:

$$r_{O,n} = \frac{1}{(0.05)(0.5\times10^{-3})}\ \Omega = 40\ \mathrm{k}\Omega, \qquad r_{O,p} = \frac{1}{(0.1)(0.5\times10^{-3})}\ \Omega = 20\ \mathrm{k}\Omega.$$

**Intrinsic gains** double:

$$g_{m,n}r_{O,n} = (3.66\ \mathrm{mS})(40\ \mathrm{k}\Omega) = 146.4, \qquad g_{m,p}r_{O,p} = (1.96\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 39.2 .$$

### Step 5 — Interpretation

Combining the formulas, and writing $\lambda = \lambda_0L_0/L$ with $\lambda_0$ the value at $L_0 = 0.5\ \mu$m:

$$g_mr_O = \frac{\sqrt{2\mu C_{ox}(W/L)|I_D|}}{\lambda|I_D|} = \frac{L}{\lambda_0L_0}\sqrt{\frac{2\mu C_{ox}(W/L)}{|I_D|}} .$$

At a fixed $W/L$ and current, the intrinsic gain is proportional to $L$. Doubling both $W$ and $L$ doubles the gain. The price is a gate area $WL$ four times larger (100 µm² versus 25 µm²), hence four times the gate capacitance and a lower speed.

### Result

| Device | $W/L$ | $g_m$ | $\lambda$ | $r_O$ | $g_mr_O$ |
|---|---|---|---|---|---|
| NMOS | 50/0.5 | 3.66 mS | 0.1 V⁻¹ | 20 kΩ | ≈ 73 |
| PMOS | 50/0.5 | 1.96 mS | 0.2 V⁻¹ | 10 kΩ | ≈ 19.6 |
| NMOS | 100/1 | 3.66 mS | 0.05 V⁻¹ | 40 kΩ | ≈ 146 |
| PMOS | 100/1 | 1.96 mS | 0.1 V⁻¹ | 20 kΩ | ≈ 39.2 |

Going from 50/0.5 to 100/1 keeps $g_m$ (same $W/L$) and doubles $r_O$ (half the $\lambda$), so the intrinsic gain doubles.

**Common mistake.** Keeping $\lambda$ at its 0.5-µm value for the 1-µm devices, so that the 100/1 results come out equal to the 50/0.5 ones. The problem states that $\lambda \propto 1/L$, so doubling $L$ halves $\lambda$ and doubles $r_O$.

**Common mistake.** Claiming the gain quadruples because both $W$ and $L$ doubled, or halves because the device is longer. $g_m$ depends only on $W/L$ (unchanged), and $r_O$ is proportional to $L$ (doubled), so the gain exactly doubles.

**Common mistake.** Using wrong formulas such as $r_O = \lambda/I_D$ or $g_m = \mu C_{ox}(W/L)I_D$, or swapping the NMOS and PMOS values of $\lambda$ and $\mu C_{ox}$. The PMOS has both the smaller $\mu C_{ox}$ and the larger $\lambda$, which is why its intrinsic gain is about a quarter of the NMOS value.
