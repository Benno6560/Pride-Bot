/*
 * Copyright © 2022 Ben Petrillo. All rights reserved.
 *
 * Project licensed under the MIT License: https://www.mit.edu/~amini/LICENSE.md
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
 * OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * All portions of this software are available for public use, provided that
 * credit is given to the original author(s).
 */

export default class Logger {

    /**
     * Log information to the console.
     * @param message
     */

    public static info(message: string) {
        console.log(`[Pronoun Bot] [INFO] ${message}`);
    }

    /**
     * Log a warning to the console.
     * @param message
     */

    public static warn(message: string): void {
        console.log(`[Pronoun Bot] [WARNING] ${message}`)
    }

    /**
     * Log an error to the console.
     * @param message
     * @return void
     */

    public static error(message: string): void {
        console.log(`[Pronoun Bot] [ERROR] ${message}`)
    }

    /**
     * Clear the console.
     * @return void
     */

    public static clear(): void {
        console.clear();
    }
}