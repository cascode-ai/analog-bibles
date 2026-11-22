# 详细步骤 - G093

在峰值电流源中，$I_{IN}$ 流过接在 $M_1$ 栅极与漏极之间的 $R$。$M_2$ 的栅极接 $M_1$ 的漏极，因此比 $M_1$ 的栅极低 $I_{IN}R$。在弱反型区漏极电流随 $V_{GS}$ 按指数变化，所以这一固定的电压差使电流缩小固定的倍数。由该倍数解出 $R$。再求使两个器件在各自电流下都保持弱反型的最小 $W/L$。

### 第 1 步 — 两个电流之间的关系

$M_1$ 的栅极位于 $R$ 的上端，其漏极（也就是 $M_2$ 的栅极）位于下端；两管源极都接地。由 KVL 得

$$
V_{GS2}=V_{GS1}-I_{IN}R .
$$

由于栅极不取电流，$M_1$ 流过 $I_{IN}$。对处于弱反型区的相同器件，$I_D=(W/L)I_t\exp[(V_{GS}-V_t)/(nV_T)]$。两电流相除，$(W/L)I_t$ 和 $V_t$ 都被消去：

$$
\frac{I_{OUT}}{I_{IN}}=\exp\!\left(\frac{V_{GS2}-V_{GS1}}{nV_T}\right)=\exp\!\left(-\frac{I_{IN}R}{nV_T}\right).
$$

### 第 2 步 — 所需的 $R$

$$
R=\frac{nV_T}{I_{IN}}\ln\frac{I_{IN}}{I_{OUT}}=\frac{(1.5)(26\ \mathrm{mV})}{1\ \mu\mathrm A}\ln10=(39\ \mathrm{k\Omega})(2.303)=89.8\ \mathrm{k\Omega}.
$$

电阻上的压降为 $I_{IN}R=89.8$ mV，即 $nV_T\ln10$，也就是弱反型电流变化十倍所需的栅压变化。$M_1$ 的 $V_{DS1}=V_{GS2}$，约为一个阈值电压，远大于 $3V_T=78$ mV，所以两个器件都满足指数律的适用条件。

### 第 3 步 — 最小 $W/L$

将弱反型公式反解，得电流为 $I_D$ 时的过驱动电压：

$$
V_{GS}-V_t=nV_T\ln\frac{I_D}{(W/L)I_t}<0\quad\Longleftrightarrow\quad\frac WL>\frac{I_D}{I_t}.
$$

| 器件 | $I_D$ | 所需 $W/L$ |
|---|---|---|
| $M_1$ | 1 µA | $>10$ |
| $M_2$ | 0.1 µA | $>1$ |

两个晶体管相同，所以由较大的电流决定下限：

$$
\left(\frac WL\right)_{\min}=\frac{I_{IN}}{I_t}=\frac{1\ \mu\mathrm A}{0.1\ \mu\mathrm A}=10 .
$$
