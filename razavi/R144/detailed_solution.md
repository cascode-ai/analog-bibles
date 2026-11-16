# Detailed solution - R144

**Approach.** The gate draws no current, so the small-signal current $i$ that $V_{in}$ pushes into node $X$ is exactly the current that flows out of the drain into $R_D$: $v_{out} = iR_D$. Seen from $X$, the transistor and $R_D$ act as an input resistance $R_{in}$, so $i = v_{in}/(R_S + R_{in})$ and $A_v = R_D/(R_S + R_{in})$. Derive $R_{in}$ with $r_O$ and the body effect, then impose $R_{in} = R_S$ to obtain both forms.

### Step 1 — Small-signal model

$V_b$ and $V_{DD}$ are ac grounds. With the gate and bulk at ac ground, $v_{gs} = v_{bs} = -v_X$, so the controlled sources carry $g_mv_{gs} + g_{mb}v_{bs} = -(g_m + g_{mb})v_X$ from drain to source, with $r_O$ between drain and source; $R_S$ connects the input to $X$, and $R_D$ goes from out to ac ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — One current through $R_S$, the transistor and $R_D$

Let $i$ flow from the input through $R_S$ into $X$. Since the gate draws no current, $i$ flows up through the transistor from source to drain, and then up through $R_D$ into $V_{DD}$ (ac ground):

$$v_{out} = iR_D . \tag{1}$$

The gain is positive: the stage is non-inverting.

### Step 3 — Input resistance at $X$

The transistor's drain-to-source current is $-i$:

$$-i = -(g_m + g_{mb})v_X + \frac{v_{out} - v_X}{r_O}.$$

Substituting (1) and multiplying by $r_O$:

$$-ir_O = -(g_m + g_{mb})r_O\,v_X + iR_D - v_X,$$

$$v_X\left[1 + (g_m + g_{mb})r_O\right] = i\,(R_D + r_O),$$

$$R_{in} = \frac{v_X}{i} = \frac{R_D + r_O}{1 + (g_m + g_{mb})r_O}. \tag{2}$$

For $r_O \to \infty$ this is the familiar $1/(g_m + g_{mb})$; with finite $r_O$, part of the drain load shows through: $R_{in} \approx 1/(g_m + g_{mb}) + R_D/[(g_m + g_{mb})r_O]$.

### Step 4 — General gain

KVL from the input through $R_S$ and $R_{in}$:

$$v_{in} = iR_S + v_X = i\,(R_S + R_{in})\quad\Longrightarrow\quad i = \frac{v_{in}}{R_S + R_{in}},$$

and with (1):

$$\frac{v_{out}}{v_{in}} = \frac{R_D}{R_S + R_{in}}. \tag{3}$$

Inserting (2) and multiplying numerator and denominator by $1 + (g_m + g_{mb})r_O$:

$$\frac{v_{out}}{v_{in}} = \frac{\left[1 + (g_m + g_{mb})r_O\right]R_D}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S + R_D},$$

the general common-gate gain with source resistance.

### Step 5 — Impose the matching condition $R_{in} = R_S$

**Second result first.** In (3):

$$\frac{v_{out}}{v_{in}} = \frac{R_D}{R_S + R_S} = \frac{R_D}{2R_S}. \qquad\blacksquare$$

**First result.** With $R_S = R_{in} = (R_D + r_O)/[1 + (g_m + g_{mb})r_O]$ from (2):

$$\frac{v_{out}}{v_{in}} = \frac{R_D}{2R_{in}} = \frac{R_D\left[1 + (g_m + g_{mb})r_O\right]}{2(R_D + r_O)},$$

and dividing numerator and denominator by $R_D$:

$$\frac{v_{out}}{v_{in}} = \frac{1 + (g_m + g_{mb})r_O}{2\left(1 + \dfrac{r_O}{R_D}\right)}. \qquad\blacksquare$$

*Cross-check.* Matching means $[1 + (g_m + g_{mb})r_O]R_S = R_D + r_O$, so the denominator of the Step 4 expression becomes $r_O + (R_D + r_O) + R_D = 2(r_O + R_D)$, giving the same result ✓.

### Step 6 — Interpretation

With matching, $R_S$ and $R_{in}$ form an equal divider, so **half of $v_{in}$ appears at $X$**, $v_X = v_{in}/2$, and $i = v_{in}/(2R_S)$ emerges entirely from the drain into $R_D$: $v_{out} = R_Dv_{in}/(2R_S)$.

The first form shows the price of matching: $R_D$ also enters $R_{in}$ through $r_O$, so a larger $R_D$ needs a larger $(g_m + g_{mb})r_O$ to keep $R_{in} = R_S$. The matched gain can never exceed half the intrinsic gain, $[1 + (g_m + g_{mb})r_O]/2$, a limit approached when $R_D \gg r_O$.

### Result

With $R_{in} = (R_D + r_O)/[1 + (g_m + g_{mb})r_O]$ and the gain $v_{out}/v_{in} = R_D/(R_S + R_{in})$, the matching condition $R_{in} = R_S$ gives

$$\frac{V_{out}}{V_{in}} = \frac{1 + (g_m + g_{mb})r_O}{2\left(1 + \dfrac{r_O}{R_D}\right)} = \frac{R_D}{2R_S}.$$

**Common mistake.** Taking $R_{in} = 1/(g_m + g_{mb})$ while keeping $r_O$ elsewhere. With finite $r_O$ the input resistance depends on the drain load, and the simplified value cannot produce the exact first expression.

**Common mistake.** Treating the stage as inverting. The current entering the source exits the drain and flows *up* through $R_D$, so $v_{out} = +iR_D$.

**Common mistake.** Forgetting the body effect. The bulk is at ground while the source moves with $v_X$, so $g_{mb}$ adds to $g_m$ everywhere.
