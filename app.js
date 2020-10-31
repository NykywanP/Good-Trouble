//

<div class="toaster"></div>

<main class="wrapper">
  <section class="section-form">
    
    <p>
     <br>
      
    </p>
    <h4>If you would like to donate please complete the form below.</h4>
    <h1>Donation Form</h1>
    <form name="signup" class="form" novalidate>
      <div class="form-group">
        <label for="name" class="form-label form-label--required">
          Name:
        </label>

        <div class="form-addon" data-states-for="name">
          <div class="form-addon__addon">
            <span class="icon-name"></span>
          </div>

          <input type="text"
                 id="name"
                 name="name"
                 class="form-input"
                 placeholder="Your info"
                 required>
          
          <span class="form-addon__icon icon-valid"></span>
          <span class="form-addon__icon icon-invalid"></span>
        </div>

        <div data-errors-for="name">
          <small class="form-error"
                 data-errors-when="valueMissing">
            This field is required.
          </small>
        </div>
      </div>

      <div class="form-group">
        <label for="email" class="form-label form-label--required">
          Email:
        </label>

        <div class="form-addon" data-states-for="email">
          <div class="form-addon__addon">
            <span class="icon-email"></span>
          </div>

          <input type="email"
                 id="email"
                 name="email"
                 class="form-input"
                 placeholder="yourinfo@email.com"
                 required>

          <span class="form-addon__icon icon-valid"></span>
          <span class="form-addon__icon icon-invalid"></span>
        </div>

        <div data-errors-for="email">
          <small class="form-error"
                 data-errors-when="valueMissing">
            This field is required.
          </small>
          
          <small class="form-error"
                 data-errors-when="typeMismatch">
            Please enter a valid email address.
          </small>
        </div>
      </div>

      <div class="form-group">
        <label for="phone" class="form-label">
          Phone number:
        </label>

        <div class="form-addon" data-states-for="phone">
          <div class="form-addon__addon">
            <span class="icon-phone"></span>
          </div>

          <input type="text"
                 id="phone"
                 name="phone"
                 class="form-input"
                 placeholder="123 456 789"
                 pattern="[0-9]{3} [0-9]{3} [0-9]{3}">

          <span class="form-addon__icon icon-valid"></span>
          <span class="form-addon__icon icon-invalid"></span>
        </div>

        <div data-errors-for="phone">
          <small class="form-error"
                 data-errors-when="patternMismatch">
            Please enter a valid phone number.
          </small>
        </div>
      </div>

      <div class="form-group">
        <label for="password" class="form-label form-label--required">
          Password <span class="text-muted">(minimum 6 characters)</span>:
        </label>

        <div class="form-addon" data-states-for="password">
          <div class="form-addon__addon">
            <span class="icon-password"></span>
          </div>

          <input type="password"
                 id="password"
                 name="password"
                 class="form-input"
                 placeholder="********"
                 minlength="6"
                 required>

          <span class="form-addon__icon icon-valid"></span>
          <span class="form-addon__icon icon-invalid"></span>
        </div>

        <div data-errors-for="password">
          <small class="form-error"
                 data-errors-when="valueMissing">
            This field is required.
          </small>
          
          <small class="form-error"
                 data-errors-when="tooShort">
            Your password should be at least 6 characters long.
          </small>
        </div>
      </div>

      <div class="form-footer">
        <button type="submit" class="button">Sign up</button>
      </div>
    </form>
  </section>

  /</div>

  