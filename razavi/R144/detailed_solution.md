# Detailed solution - R144

**Approach.** The gate draws no current, so the small-signal current $i$ that the source $V_{in}$ pushes into node $X$ is exactly the current that flows out of the drain into $R_D$. Hence $v_{out} = iR_D$. Seen from $X$, the transistor and $R_D$ together act as an input resistance $R_{in}$, so $i = v_{in}/(R_S + R_{in})$ and $A_v = R_D/(R_S + R_{in})$. We derive $R_{in}$ including $r_O$ and the body effect, then impose the matching condition $R_{in} = R_S$ to obtain both required forms.

### Step 1 — The circuit and its small-signal model

From the figure: the source $V_{in}$, in series with $R_S$, drives node $X$ (the source of $M_1$). The gate is at the dc bias $V_b$, the drain is the output, $R_D$ connects the drain to $V_{DD}$, $r_O$ is drawn between drain and source, and the bulk is at ground.

Small-signal model ($V_b$, $V_{DD}$ and ground are ac grounds):

- $R_S$ between the input node and $X$;
- the transistor between out (drain) and $X$ (source): with the gate and bulk at ac ground, $v_{gs} = -v_X$ and $v_{bs} = -v_X$, so the controlled sources carry $g_mv_{gs} + g_{mb}v_{bs} = -(g_m + g_{mb})v_X$ from drain to source; $r_O$ connects drain and source;
- $R_D$ from out to ac ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — One current through $R_S$, the transistor and $R_D$

Let $i$ be the small-signal current flowing from the input source through $R_S$ into $X$.

- At $X$, the only other connection is the transistor's source (the gate draws no current), so $i$ flows up through the transistor, from source to drain.
- At the output, the only other connection is $R_D$, so $i$ continues up through $R_D$ into $V_{DD}$ (ac ground).

Ohm's law on $R_D$ (current $i$ flowing from out to ac ground):

$$v_{out} = iR_D . \tag{1}$$

The gain is positive: the stage is non-inverting.

### Step 3 — Input resistance at $X$

The drain-to-source current of the transistor is $-i$, because $i$ flows from source to drain:

$$-i = -(g_m + g_{mb})v_X + \frac{v_{out} - v_X}{r_O}.$$

Substitute $v_{out} = iR_D$ from (1) and multiply by $r_O$:

$$-ir_O = -(g_m + g_{mb})r_O\,v_X + iR_D - v_X.$$

Collect the $v_X$ terms on one side and the $i$ terms on the other:

$$v_X\left[1 + (g_m + g_{mb})r_O\right] = i\,(R_D + r_O).$$

So the resistance seen looking into $X$ (with the drain loaded by $R_D$) is

$$R_{in} = \frac{v_X}{i} = \frac{R_D + r_O}{1 + (g_m + g_{mb})r_O}. \tag{2}$$

For $r_O \to \infty$ this reduces to the familiar $1/(g_m + g_{mb})$. With finite $r_O$, part of the drain load "shows through" to the source: $R_{in} \approx 1/(g_m + g_{mb}) + R_D/[(g_m + g_{mb})r_O]$.

### Step 4 — General gain

**KVL from the input source to ground through $R_S$ and $R_{in}$:**

$$v_{in} = iR_S + v_X = i\,(R_S + R_{in})\quad\Longrightarrow\quad i = \frac{v_{in}}{R_S + R_{in}}.$$

**With (1):**

$$\frac{v_{out}}{v_{in}} = \frac{R_D}{R_S + R_{in}}. \tag{3}$$

Inserting (2) and multiplying numerator and denominator by $1 + (g_m + g_{mb})r_O$:

$$\frac{v_{out}}{v_{in}} = \frac{\left[1 + (g_m + g_{mb})r_O\right]R_D}{r_O + \left[1 + (g_m + g_{mb})r_O\right]R_S + R_D},$$

the general common-gate gain with source resistance.

### Step 5 — Impose the matching condition

The stage is designed so that its input resistance equals the source resistance:

$$R_{in} = R_S .$$

**Second result first.** Put $R_{in} = R_S$ into (3):

$$\frac{v_{out}}{v_{in}} = \frac{R_D}{R_S + R_S} = \frac{R_D}{2R_S}. \qquad\blacksquare$$

**First result.** Now express $R_S$ through the transistor parameters using (2), $R_S = R_{in} = (R_D + r_O)/[1 + (g_m + g_{mb})r_O]$:

$$\frac{v_{out}}{v_{in}} = \frac{R_D}{2R_{in}} = \frac{R_D\left[1 + (g_m + g_{mb})r_O\right]}{2(R_D + r_O)}.$$

Divide numerator and denominator by $R_D$:

$$\frac{v_{out}}{v_{in}} = \frac{1 + (g_m + g_{mb})r_O}{2\left(1 + \dfrac{r_O}{R_D}\right)}. \qquad\blacksquare$$

*Cross-check with the general formula.* Matching means $[1 + (g_m + g_{mb})r_O]R_S = R_D + r_O$. The denominator of the Step 4 expression then becomes $r_O + (R_D + r_O) + R_D = 2(r_O + R_D)$, giving the same result ✓.

### Step 6 — Interpretation

With matching, $R_S$ and $R_{in}$ form an equal voltage divider, so **half of $v_{in}$ appears at $X$**: $v_X = v_{in}/2$. The current entering $X$ is $i = v_{in}/(2R_S)$. Because the gate takes nothing, all of it emerges from the drain and flows through $R_D$, so $v_{out} = R_Dv_{in}/(2R_S)$.

The first form shows the price of matching. $R_D$ also enters $R_{in}$ through $r_O$, so a larger $R_D$ requires a larger $(g_m + g_{mb})r_O$ to keep $R_{in} = R_S$. For a given transistor, the matched gain can never exceed half its intrinsic gain, $[1 + (g_m + g_{mb})r_O]/2$, a limit approached when $R_D \gg r_O$.

### Result

With $R_{in} = (R_D + r_O)/[1 + (g_m + g_{mb})r_O]$ and the gain $v_{out}/v_{in} = R_D/(R_S + R_{in})$, the matching condition $R_{in} = R_S$ gives

$$\frac{V_{out}}{V_{in}} = \frac{1 + (g_m + g_{mb})r_O}{2\left(1 + \dfrac{r_O}{R_D}\right)} = \frac{R_D}{2R_S}.$$

**Common mistake.** Taking $R_{in} = 1/(g_m + g_{mb})$ while keeping $r_O$ elsewhere. With finite $r_O$, the input resistance of a common-gate stage depends on its drain load: $R_{in} = (R_D + r_O)/[1 + (g_m + g_{mb})r_O]$. Using the simplified value cannot produce the exact first expression.

**Common mistake.** Treating the stage as inverting. The current entering the source exits the drain and flows *up* through $R_D$, so $v_{out} = +iR_D$; raising $v_{in}$ raises $v_X$, reduces the transistor's $V_{GS}$, lowers the dc current through $R_D$, and raises $V_{out}$.

**Common mistake.** Forgetting the body effect. The bulk is at ground while the source moves with $v_X$, so $v_{bs} = -v_X$, and $g_{mb}$ adds to $g_m$ everywhere: $g_m + g_{mb}$, not $g_m$ alone.
